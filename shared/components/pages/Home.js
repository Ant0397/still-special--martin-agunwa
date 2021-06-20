import React from 'react'
import ContentBlock from '../ContentBlock'
import Quote from '../Quote'
import hero from '../../assets/thumbnail_DSC_0263.jpg'
// import CarouselStrip from '../carousel/CarouselStrip' 

export default function Home() {
    let heroImage = {
        src: hero,
        alt: 'Headshot of Martin Agunwa'
    }

    return (
        <div id="home">
            <ContentBlock theme="dark" media={[heroImage]} mediaPosition="right">
                <p className="text-large">Public relations professional with a good grasp of marketing communications, event planning, corporate messaging and strategic branding. Possesses excellent knowledge of organization and people management as well as exceptional writing, speaking and editing skills and strong work ethic.</p>
            </ContentBlock>
            
            <Quote text="Live for yourself and you will live in vain; Live for others and you will live again." author="Bob Marley" />

            {/* <CarouselStrip theme="dark" /> */}
    
        </div>
    )
}