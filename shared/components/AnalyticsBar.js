import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { AnalyticsContext } from '../context/AnalyticsContext'
import ContentService from '../services/ContentService'

export default function AnalyticsBar({ content, disableClicks }) {
    const [analytics, setAnalytics] = useContext(AnalyticsContext)
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        if (__isBrowser__) {
            if (window.localStorage.getItem('likedContent')) {
                let likedContent = JSON.parse(window.localStorage.getItem('likedContent'))
                if (likedContent.includes(`a${content._id}`)) {
                    let elements = document.querySelectorAll(`#a${content._id}`)
                    elements.forEach(element => element.classList.add('liked'))
                    setLiked(true)
                }
            }
        }
    }, [])

    function toggleLiked(e) {
        e.preventDefault()
        let parentDiv = document.getElementById(`a${content._id}`)
        if (parentDiv.classList.contains('disabled')) return 

        // disable clicks until process finishes
        parentDiv.classList.add('disabled')

        // if liked flag is false, user intends to like content 
        ContentService.updateAnalytic(content.name, 'likes', !liked ? analytics.filter(analytic => analytic.name == content.name)[0].likes + 1 : analytics.filter(analytic => analytic.name == content.name)[0].likes - 1)
            .then(err => {
                if (err) {
                    console.log(err.messages)
                } else {
                    setAnalytics(analytics.map(analytic => {
                       return analytic.name == content.name 
                        ? {...analytic, likes: !liked ? analytic.likes + 1 : analytic.likes - 1}
                        : analytic
                    }))

                    if (!liked) {
                        parentDiv.classList.add('liked')

                        // add reference to local storage to persist likes across page reloads
                        // if local storage object does not exist, initalise with empty array
                        let likedContent = JSON.parse(window.localStorage.getItem('likedContent')) || []
                        likedContent.push(`a${content._id}`)
                        window.localStorage.setItem('likedContent', JSON.stringify(likedContent))
                    } else {
                        parentDiv.classList.remove('liked')
                        let likedContent = JSON.parse(window.localStorage.getItem('likedContent'))
                        
                        // remove reference and reset local storage object
                        likedContent = likedContent.filter(id => id != `a${content._id}`)
                        window.localStorage.setItem('likedContent', JSON.stringify(likedContent))
                    }

                    // process successful, liked flag can be set to its opposite
                    setLiked(!liked)
                    parentDiv.classList.remove('disabled')
                }
            })
    }

    return (
        <div className="analytics__bar">
            <div className="analytic">
                <FontAwesomeIcon icon={faEye} />
                <p>{ analytics ? analytics.filter(analytic => analytic.name == content.name)[0].views : null }</p>
            </div>
            <div id={`a${content._id}`} onClick={toggleLiked} className={`analytic ${disableClicks ? "disabled" : "like"}`}>
                <FontAwesomeIcon icon={faHeart} />
                <p>{ analytics ? analytics.filter(analytic => analytic.name == content.name)[0].likes : null }</p>
            </div>
        </div>
    )
}