import React, { useContext } from 'react'
import ContentBlock from '../ContentBlock'
import Quote from '../Quote'
import CarouselStrip from '../carousel/CarouselStrip'
import { BlogContext } from '../../context/BlogContext'
import { VideoContext } from '../../context/VideoContext'
import carouselImage1 from '../../assets/slides/20191102_160240.jpg'
import carouselImage2 from '../../assets/slides/20191116_100837.jpg'
import carouselImage3 from '../../assets/slides/20191116_123414.jpg'
import carouselImage4 from '../../assets/slides/20191116_123421.jpg'
import carouselImage5 from '../../assets/slides/20191207_083856.jpg'
import carouselImage6 from '../../assets/slides/20201016_175254.jpg'
import carouselImage7 from '../../assets/slides/20201016_175308.jpg'
import carouselImage8 from '../../assets/slides/20201016_175319.jpg'
import carouselImage9 from '../../assets/slides/DSC_0312.JPG'
import carouselImage10 from '../../assets/slides/DSC_0356.JPG'
import carouselImage11 from '../../assets/slides/DSC_0374.JPG'
import carouselImage12 from '../../assets/slides/DSC_0437.JPG'
import carouselImage13 from '../../assets/slides/DSC_0442.JPG'
import carouselImage15 from '../../assets/slides/IMG-20190128-WA0000.jpg'
import carouselImage16 from '../../assets/slides/IMG-20190307-WA0000.jpg'
import carouselImage17 from '../../assets/slides/IMG-20190307-WA0002.jpg'
import carouselImage18 from '../../assets/slides/IMG-20190626-WA0014.jpg'
import carouselImage19 from '../../assets/slides/IMG-20191102-WA0015.jpg'
import carouselImage20 from '../../assets/slides/IMG-20191102-WA0019.jpg'
import carouselImage21 from '../../assets/slides/IMG-20191107-WA0010.jpg'
import carouselImage22 from '../../assets/slides/IMG-20191201-WA0005.jpg'
import carouselImage23 from '../../assets/slides/IMG-20200301-WA0000.jpg'
import carouselImage24 from '../../assets/slides/IMG-20200731-WA0004.jpg'
import carouselImage25 from '../../assets/slides/IMG-20201013-WA0019.jpg'
import carouselImage26 from '../../assets/slides/IMG-20201013-WA0026.jpg'
import hero from '../../assets/thumbnail_DSC_0263.jpg'


export default function Home({ theme }) {
    let blogs = useContext(BlogContext)
    let videos = useContext(VideoContext)

    let heroImage = {
        src: hero,
        alt: 'Headshot of Martin Agunwa'
    }

    let carouselImages = [
        {
            src: carouselImage1,
            alt: 'Martin standing with a team holding #ClaimingOurSpace signs'
        },
        {
            src: carouselImage2,
            alt: 'Martin with a croud of people emceeing'
        },
        {
            src: carouselImage3,
            alt: 'Martin with two other people broadcasting in a radio station'
        },
        {
            src: carouselImage4,
            alt: 'Martin with two other people broadcasting in a radio station'
        },
        {
            src: carouselImage5,
            alt: 'Selfshot of Martin at a road safety awareness event'
        },
        {
            src: carouselImage6,
            alt: 'Martin holding a sign advocating against police brutality'
        },
        {
            src: carouselImage7,
            alt: 'Martin holding a sign advocating against police brutality'
        },
        {
            src: carouselImage8,
            alt: 'Martin holding a sign advocating against police brutality'
        },
        {
            src: carouselImage9,
            alt: 'Martin speaking to an audience'
        },
        {
            src: carouselImage10,
            alt: 'A photo of Martin with organisers of an event'
        },
        {
            src: carouselImage11,
            alt: 'Martin speaking to the organisers of an event'
        },
        {
            src: carouselImage12,
            alt: 'Martin at Jesus Kids\' Home Nigeria'
        },
        {
            src: carouselImage13,
            alt: 'Martin at Jesus Kids\' Home Nigeria'
        },
        {
            src: carouselImage15,
            alt: 'Martin speaking at an event'
        },
        {
            src: carouselImage16,
            alt: 'Martin speaking at an event'
        },
        {
            src: carouselImage17,
            alt: 'Martin speaking at an event'
        },
        {
            src: carouselImage18,
            alt: 'Martin speaking at an event'
        },
        {
            src: carouselImage19,
            alt: 'Martin planning #ClaimingOurSpace event'
        },
        {
            src: carouselImage20,
            alt: 'Martin standing with a team holding #ClaimingOurSpace signs'
        },
        {
            src: carouselImage21,
            alt: 'Martin planning #ClaimingOurSpace event'
        },
        {
            src: carouselImage22,
            alt: 'Martin speaking at an event'
        },
        {
            src: carouselImage23,
            alt: 'Martin standing on a hill with a team of people'
        },
        {
            src: carouselImage24,
            alt: 'Martin speaking at an event'
        },
        {
            src: carouselImage25,
            alt: 'Martin speaking at an event'
        },
        {
            src: carouselImage26,
            alt: 'Martin speaking at an event'
        }
    ]

    let carousels = [
        {
            content: blogs,
            type: 'image'
        },
        {
            content: videos,
            type: 'video'
        },
        {
            content: carouselImages,
            type: 'image'
        }
    ]

    return (
        <div>
            <ContentBlock theme={theme} media={[heroImage]} mediaPosition="right">
                <p className="text-large">Public relations professional with a good grasp of marketing communications, event planning, corporate messaging and strategic branding. Possesses excellent knowledge of organization and people management as well as exceptional writing, speaking and editing skills and strong work ethic.</p>
            </ContentBlock>
            
            <Quote theme={theme} text="Live for yourself and you will live in vain; Live for others and you will live again." author="Bob Marley" />

            <CarouselStrip carousels={carousels} theme="dark" />
        </div>
    )
}