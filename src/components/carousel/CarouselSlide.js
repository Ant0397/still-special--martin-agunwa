import React from 'react'
import ContentCard from '../ContentCard'

export default function CarouselSlide({ theme, blog, video, image }) {

    return (
        <div className="carousel__strip">
            <ContentCard carouselStrip="carousel" theme={theme} title={blog.title} type="image" content={blog} />
            <ContentCard carouselStrip="carousel" theme={theme} title={video.title} type="video" content={video} /> 
            <ContentCard carouselStrip="carousel" theme={theme} type="image" content={image} />
        </div>
    )
}