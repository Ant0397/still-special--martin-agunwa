import React, { useContext } from 'react'
import AutoCarousel from './AutoCarousel'
import { BlogContext } from '../../context/BlogContext'
import { VideoContext } from '../../context/VideoContext'


export default function CarouselStrip({ theme }) {
    let blogs = useContext(BlogContext)
    let videos = useContext(VideoContext)

    return (
        <div className={`carousel__block carousel__block--${theme}`}>
            <h1 className="carousel__block__heading">Blogs and Campaign Videos</h1>
            <AutoCarousel theme={theme} />
        </div>
    )
}