import React from 'react'
import ContentCard from '../ContentCard'

export default function CarouselSlide({ theme, blog, video, image }) {

    return (
        <div className="carousel__strip">
            <ContentCard carouselStrip theme={theme} content={blog} />
            <ContentCard carouselStrip theme={theme} content={video} /> 
            <ContentCard carouselStrip theme={theme} content={image} />
        </div>
    )
}