import React from 'react'
import visualisedAudio from '../../assets/Still Special Campaign (Visualised audio) - Advocacy to raise awarenes about the plight of children with disabilities in rural parts of Nigeria  (Made by Headliner).mp4'
import interview from '../../assets/Untitled Project (Made by Headliner).mp4'
import ContentBlock from '../ContentBlock'
import ContentCard from '../ContentCard'

export default function Campaigns() {
    return (
        <ContentBlock>
            <h1 className="content__block__heading">STILL SPECIAL CAMPAIGN</h1>
            <p><i>Advocacy campaign to raise awareness about special needs children (autism, cerebral, down syndrome and other cognitive development sufferers) in Nigeria.</i></p>
            <p>Unfortunately, there still exists widespread ignorance in many parts of Nigeria as it relates to children suffering various forms of cognitive disabilities - autism, cerebral palsy, down syndrome among others.</p>
            <p>it is very sad to see that these special kids in most instances are not only discriminated against or abused but are also being killed in many communities due to ignorant beliefs that they are curses.</p>
            <p>This campaign seeks to call attention to the plight of special needs children in Nigeria and makes a case for an end to their stigmatization while calling for their equal integration into society.</p>
            <br></br>
            <div className="content__card__container">
                <ContentCard type="video" title="Still Special - Visualised Audio" content={visualisedAudio} />
                <ContentCard type="video" title="Still Special - Human Interest Story" content={interview} />
                <ContentCard type="video" title="Still Special - Instagram Story" content="https://youtu.be/6LjNQRADMpk" />
            </div>
        </ContentBlock>
    )
}