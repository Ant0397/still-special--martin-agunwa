import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function AutoCarousel({ images, children }) {
    return (
        <Carousel autoPlay={true} showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true}>
            { images ?
                images.map(image => (
                    <div className="carousel__container">
                        <img src={image.image} alt={image.alt}/>
                            { children ? 
                                <div className="carousel__content__container">
                                    <div className="carousel__content">
                                        { children }
                                    </div>
                                </div>
                            :
                                null
                            }
                    </div>
                ))
            :
                null
            }
        </Carousel>
    )
}
