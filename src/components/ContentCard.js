import React from 'react'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router'

export default function ContentCard({ type, content, title }) {
    const history = useHistory()

    function preventRightClick(e) {
        e.preventDefault()
    }

    function redirect() {
        type != 'video' ? history.push(content.url) : null
    }

    return (
        <div onClick={redirect} className={`content__card content__card--${type}`}>
            <h2 className='content__card__heading'>{title}</h2>
            { type == 'video' ?
                <ReactPlayer controls={true} width="350px" height="200px" onContextMenu={preventRightClick} className="video" url={content} />
            : 
                <img className="content__card__image" src={content.images[0].src} alt={content.images[0].alt} />
            }
        </div>
    )
}