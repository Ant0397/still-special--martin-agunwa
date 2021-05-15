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
        type != 'video' ? history.push(content.url) : history.push('/campaigns')
    }

    // sets a class that allows images to expand to fill container if there is no title 
    function centreCardContent() {
        return title ? '' : 'content__card--no-title'
    }

    // sets a class that allows images to expand to fill container if there is no title 
    function expandCardContent() {
        return title ? '' : 'content__card__image--no-title'
    }

    return (
        <div onClick={redirect} className={`${centreCardContent()} content__card content__card--${theme} content__card--${type} content__card--${carouselStrip}`}>
             { title ? <h2 className='content__card__heading'>{title}</h2> : null }
            { type == 'video' ?
                <ReactPlayer controls={true} onContextMenu={preventRightClick} className={`content__card__video content__card__video--${carouselStrip}`} url={content.video} />
            : 
                <img className={`${expandCardContent()} content__card__image content__card__image--${carouselStrip}`} src={content.src ? content.src : content.images[0].src} alt={content.alt ? content.alt : content.images[0].alt} />
            }
        </div>
    )
}