import React from 'react'
import melancholyImg from '../assets/melancholy-of-unknown-selves.jpg'
import filthySoundImg from '../assets/These-filtered-filthy-sound.jpg'
import sorryForTheRacistImg from '../assets/I-feel-sorry-for-the-racist.png'
import { useRouteMatch } from 'react-router'
import AutoCarousel from './AutoCarousel'

export default function CarouselStrip({ theme, blogs, images, videos }) {
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
        <div className={`carousel__block carousel__block--${theme}`}>
            <h1 className="carousel__block__heading">Blogs and Campaign Videos</h1>
            <div className="carousel__strip">
                <AutoCarousel theme={theme} content={articles} type="image" />
                <AutoCarousel theme={theme} content={articles} type="image" />
                <AutoCarousel theme={theme} content={articles} type="image" />
            </div>
        </div>
    )
}