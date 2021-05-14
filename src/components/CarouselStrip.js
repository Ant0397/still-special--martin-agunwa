import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import melancholyImg from '../assets/melancholy-of-unknown-selves.jpg'
import filthySoundImg from '../assets/These-filtered-filthy-sound.jpg'
import sorryForTheRacistImg from '../assets/I-feel-sorry-for-the-racist.png'
import ContentCard from './ContentCard'
import { useRouteMatch } from 'react-router'

export default function CarouselStrip({ blogs, images, videos }) {
    const match = useRouteMatch()

    const articles = [
        {
            title: 'A melancholy of unknown selves',
            images: [
                {
                    src: melancholyImg,
                    alt: 'A woman staring at her reflection in her mobile phone screen'
                }
            ],
            url: match.url + '/1'
        },
        {
            title: 'These filthy filtered sounds',
            images: [
                {
                    src: filthySoundImg,
                    alt: 'A hand turns a dial on a sound mixer'
                }
            ],
            url: match.url + '/2'
        },
        {
            title: 'I feel sorry for the racist',
            images: [
                {
                    src: sorryForTheRacistImg,
                    alt: 'An image of blank and white handprints'
                }
            ],
            url: match.url + '/3'
        }
    ]

    return (
        <div className="carousel__strip">
            <div className="carousel__container">
                <Carousel autoPlay={true} showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true}>
                    { articles.map(article => (
                        <ContentCard type="image" title={article.title} content={article} />
                    ))}
                </Carousel>
            </div>
            <div className="carousel__container">
            <Carousel autoPlay={true} showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true}>
                    { articles.map(article => (
                        <ContentCard type="image" title={article.title} content={article} />
                    ))}
                </Carousel>
            </div>
            <div className="carousel__container">
            <Carousel autoPlay={true} showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true}>
                    { articles.map(article => (
                        <ContentCard type="image" title={article.title} content={article} />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}