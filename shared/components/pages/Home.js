import React from 'react'
import ContentBlock from '../ContentBlock'
import Quote from '../Quote'
// import CarouselStrip from '../carousel/CarouselStrip'
import hero from '../../assets/thumbnail_DSC_0263.jpg'

export default function Home({ theme }) {
    let heroImage = {
        src: hero,
        alt: 'Headshot of Martin Agunwa'
    }

    return (
        <div>
            <ContentBlock theme={theme} media={[heroImage]} mediaPosition="right">
                <p className="text-large">Public relations professional with a good grasp of marketing communications, event planning, corporate messaging and strategic branding. Possesses excellent knowledge of organization and people management as well as exceptional writing, speaking and editing skills and strong work ethic.</p>
            </ContentBlock>
            
            <Quote text="Live for yourself and you will live in vain; Live for others and you will live again." author="Bob Marley" />

            {/* <CarouselStrip theme={theme} /> */}
        </div>
    )
}