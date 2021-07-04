import React, { useContext } from 'react'
import ReactPlayer from 'react-player/youtube'
import { Link, useHistory } from 'react-router-dom'
import { AnalyticsContext } from '../context/AnalyticsContext'
import ContentService from '../services/ContentService'
import AnalyticsBar from './AnalyticsBar'
import ShareBar from './ShareBar'

// carouselStrip prop applies classes to style component if it forms part of a carousel strip
export default function ContentCard({ theme, carouselStrip, content }) {
    const [analytics, setAnalytics] = useContext(AnalyticsContext)
    const history = useHistory()

    // prevents page from reloading so context does not unmount
    function redirect(e) {
        e.preventDefault()
        console.log(content.url)
        return content.category == 'video' ? history.push('/campaign') : history.push(content.url)
    }

    function updateViews() {
        ContentService.updateAnalytic(content.name, 'views', content.views + 1)
            .then(err => {
                if (err) {
                    console.log(err)
                } else {
                    setAnalytics(analytics.map(analytic => {
                        return analytic.name == content.name
                            ? {...analytic, views: analytic.views + 1}
                            : analytic
                    }))
                }
            })
    }

    return (
        <div>
            <Link to={content.category == 'video' ? '/campaign' : content.url} onClick={redirect} className={`${content.shortTitle ? "" : "content__card--no-title"} content__card ${theme ? "content__card--" + theme : ""} ${carouselStrip ? "content__card--carousel" : ""} ${content.category == 'video' ? "content__card--video" : "content__card--image"}`}>
                { content.shortTitle ? <h2 className='content__card__heading'>{content.shortTitle}</h2> : null }
                { content.category == 'video' ?
                    <ReactPlayer onStart={updateViews} controls={true} onContextMenu={(e) => e.preventDefault()} className={`content__card__video ${carouselStrip ? "content__card__video--carousel" : ""}`} url={content.content} />
                :
                    <img className={`${content.shortTitle ? "" : "content__card__image--no-title"} content__card__image ${carouselStrip ? "content__card__image--carousel" : ""}`} src={content.thumbnailImgSrc ? content.thumbnailImgSrc : content.src} alt={content.thumbnailImgAlt ? content.thumbnailImgAlt : content.alt} />
                }

                {/* if no title, do not display analytics as ContentCard is an image */}
                { content.shortTitle ?
                    <AnalyticsBar content={content} disableClicks={carouselStrip || content.category != 'video' ? true : false} />
                :
                    null
                }
            </Link>
            {/* { !carouselStrip && content.category != 'video' ?
                <ShareBar contentType="content" contentUrl={'martinagunwa.co.uk' + content.url} />
            :
                null    
            } */}
        </div>
    )
}