import React from 'react'
import AutoCarousel from './AutoCarousel'

export default function CarouselStrip({ theme, carousels }) {

    return (
        <div className={`carousel__block carousel__block--${theme}`}>
            <h1 className="carousel__block__heading">Blogs and Campaign Videos</h1>
            <div className="carousel__strip">
                { carousels.map(carousel => (
                    <AutoCarousel theme={theme} contentCardItems={carousel.content} contentCardType={carousel.type} />
                ))}
            </div>
        </div>
    )
}