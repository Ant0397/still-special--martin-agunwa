import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ContentCard from './ContentCard';

export default function AutoCarousel({ content, type }) {
    return (
        <div className="carousel__container">
            <Carousel autoPlay={true} stopOnHover={false} showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true}>
                { content.map(item => (

                    <ContentCard carouselStrip="carousel" type={type} title={item.title} content={item} />
                ))}
            </Carousel>
        </div> 
    )
}
