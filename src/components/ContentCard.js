import React from 'react'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router'

export default function ContentCard({ type, content, title }) {
    const history = useHistory()

    function preventRightClick(e) {
        e.preventDefault()
    }

    function redirect(e) {
        type != 'video' ? history.push(content.url) : null
    }

    return (
        <div className="content__card">
            <h2 onClick={redirect} className={`header--${type}`}>{title}</h2>
            { type == 'video' ?
                <ReactPlayer controls={true} width="97%" onContextMenu={preventRightClick} className="video" url={content} />
            : 
                <img onClick={redirect} className="content__card__image" src={content.images[0].src} alt={content.images[0].alt} />
            }
        </div>
    )
}