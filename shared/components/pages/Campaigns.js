import React, { useContext } from 'react'
import { VideoContext } from '../../context/VideoContext'
import ContentBlock from '../ContentBlock'
import ContentCard from '../ContentCard'

export default function Campaigns() {
    const videos = useContext(VideoContext)

    return (
        <ContentBlock>
            <h1 className="content__block__heading">STILL SPECIAL CAMPAIGN</h1>
            <p><i>Advocacy campaign to raise awareness about special needs children (autism, cerebral palsy, down syndrome and other cognitive development sufferers) in Nigeria.</i></p>
            <p>Unfortunately, there still exists widespread ignorance in many parts of Nigeria as it relates to children suffering various forms of cognitive disabilities - autism, cerebral palsy, down syndrome among others.</p>
            <p>it is very sad to see that these special kids in most instances are not only discriminated against or abused but are also being killed in many communities due to ignorant beliefs that they are curses.</p>
            <p>This campaign seeks to call attention to the plight of special needs children in Nigeria and makes a case for an end to their stigmatization while calling for their equal integration into society.</p>
            <br></br>
            <div className="content__card__container">
                { videos ? 
                    videos.map(video => (
                        <ContentCard type="video" title={video.title} content={video.url} />
                    ))   
                :
                    null
                }
            </div>
        </ContentBlock>
    )
}