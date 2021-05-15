import React from 'react'
import AutoCarousel from '../AutoCarousel'
import water from '../../assets/4b9ac2a8513d4218b4e7211e83b1bdbd.jpg'
import birds from '../../assets/11d09274fb8b4eceb34b6a8b6d16e8b5.jpeg'
import fish from '../../assets/eadb0412451740f4ad9a763f9a358ddc.jpg'
import cogDisabilitiesHero from '../../assets/b90d69_ffccad9d02e94eff9b760667e296a270_mv2.jpg'
import autism from '../../assets/21276e9bb2a04809a76f2a7bfe161219.jpg'
import cerebralPalsy from '../../assets/a2f61e98656042c891462792a182518f.jpg'
import downSyndrome from '../../assets/0908b4c858c2438db45e303fafbde49b.jpg'
import hero from '../../assets/thumbnail_DSC_0263.jpg'
import ContentBlock from '../ContentBlock'
import Quote from '../Quote'
import CarouselStrip from '../CarouselStrip'

export default function Home() {
    const images = {
        autismImg: {
            image: autism,
            alt: 'Autism'
        },
        cerbralPalsyImg: {
            image: cerebralPalsy,
            alt: 'Cerebral Palsy'
        },
        downSyndromeImg: {
            image: downSyndrome,
            alt: 'Down\'s Syndrome'
        },
        heroImg: {
            image: hero,
            alt: 'Headshot of Martin Agunwa'
        },
        cogDisabilitiesHeroImg: {
            image: cogDisabilitiesHero,
            alt: 'Cognitive Disabilities'
        },
        waterImg: {
            image: water,
            alt: 'Water'
        },
        birdsImg: {
            image: birds,
            alt: 'Birds'
        },
        fishImg: {
            image: fish,
            alt: 'Fish'
        }
    }

    return (
        <div>
            <ContentBlock theme="dark" media={[images.heroImg]} mediaPosition="right">
                <p className="text-large">Public relations professional with a good grasp of marketing communications, event planning, corporate messaging and strategic branding. Possesses excellent knowledge of organization and people management as well as exceptional writing, speaking and editing skills and strong work ethic.</p>
            </ContentBlock>
            
            {/* <AutoCarousel images={[images.cogDisabilitiesHeroImg]}>
                <h2>WHAT ARE COGNITIVE DISABILITIES</h2>
            </AutoCarousel> */}

            <Quote theme="dark" text="Live for yourself and you will live in vain; Live for others and you will live again." author="Bob Marley" />

            <CarouselStrip theme="dark" />
        </div>
    )
}