import React from 'react'
import { titleCase } from '../../helpers'
import ContentCard from '../ContentCard'

export default function CarouselSlide({ theme, blog, video, image }) {

    return (
        <div className="carousel__strip">
            <ContentCard carouselStrip theme={theme} title={titleCase(blog.title)} type="image" content={blog} />
            <ContentCard carouselStrip theme={theme} title={titleCase(video.title)} type="video" content={video.url} /> 
            <ContentCard carouselStrip theme={theme} type="image" content={image} />
        </div>
    )
}