import React from 'react'
import AutoCarousel from './AutoCarousel'

export default function CarouselStrip({ theme }) {
    return (
        <div className={`carousel__block carousel__block--${theme}`}>
            <h1 className="carousel__block__heading">Blogs and Campaign Videos</h1>
            <AutoCarousel theme={theme} />
        </div>
    )
}