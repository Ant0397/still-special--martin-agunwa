import React from 'react'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router'

// carouselStrip prop applies classes to style component if it forms part of a carousel strip
// type applies classes to style component depending on if it contains an image or video (images link to the article in question, videos are just playable)
export default function ContentCard({ theme, carouselStrip, type, content, title }) {
    const history = useHistory()

    function preventRightClick(e) {
        e.preventDefault()
    }

    function redirect() {
        type != 'video' ? history.push(content.url) : null
    }

    return (
        <div onClick={redirect} className={`content__card content__card--${theme} content__card--${type} content__card--${carouselStrip}`}>
            <h2 className='content__card__heading'>{title}</h2>
            { type == 'video' ?
                <ReactPlayer controls={true} onContextMenu={preventRightClick} className={`content__card__video content__card__video--${carouselStrip}`} url={content} />
            : 
                <img className={`content__card__image content__card__image--${carouselStrip}`} src={content.images[0].src} alt={content.images[0].alt} />
            }
        </div>
    )
}