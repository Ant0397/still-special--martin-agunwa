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

    return (
        <div onClick={redirect} className={`${title ? "" : "content__card--no-title"} content__card ${theme ? "content__card--" + theme : ""} content__card--${type} ${carouselStrip ? "content__card--carousel" : ""}`}>
           
            { title ? <h2 className='content__card__heading'>{title}</h2> : null }
            { type == 'video' ?
                <ReactPlayer controls={true} onContextMenu={preventRightClick} className={`content__card__video ${carouselStrip ? "content__card__video--carousel" : ""}`} url={content} />
            : 
              null  // <img className={`${title ? "" : "content__card__image--no-title"} content__card__image ${carouselStrip ? "content__card__image--carousel" : ""}`} src={content.src ? content.src : content.images[0].src} alt={content.alt ? content.alt : content.images[0].alt} />
            }
        </div>
    )
}