import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ContentCard from '../ContentCard';

export default function AutoCarousel({ theme, contentCardItems, contentCardType }) {
    return (
        <div className="carousel__container">
            <Carousel autoPlay={true} transitionTime={1500} interval={7000} stopOnHover={false} showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true}>
                { contentCardItems ? 
                    contentCardItems.map(item => (
                        <ContentCard theme={theme} carouselStrip="carousel" type={contentCardType} title={item.title ? item.title : null} content={item} />
                    ))    
                :
                    null
                }
            </Carousel>
        </div> 
    )
}
