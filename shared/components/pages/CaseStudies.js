import React, { useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import ContentBlock from '../ContentBlock'
import ContentCard from '../ContentCard'
import lekkiImg from '../../assets/Lekki.png'
import lekkiImg2 from '../../assets/Lekki-2.png'
import lekkiImg3 from '../../assets/Lekki-3.png'
import lekkiImg4 from '../../assets/Lekki-4.png'
import harmattanImg from '../../assets/Harmattan.png'
import niveaImg1 from '../../assets/Nivea-1.png'
import niveaImg2 from '../../assets/Nivea-2.png'
import harmattanImg2 from '../../assets/Harmattan-2.png'
import niveaTestemonialImg1 from '../../assets/Nivea-testemonial-1.png'
import niveaTestemonialImg2 from '../../assets/Nivea-testemonial-2.png'
import twitterImg1 from '../../assets/Twitter-1.png'
import twiiterImg2 from '../../assets/Twitter-2.png'
import instaImg1 from '../../assets/Insta-1.png'
import instaImg2 from '../../assets/Insta-2.png'
import Article from '../Article'

export default function CaseStudies() {
    const match = useRouteMatch()

    const caseStudies = [
        {
            title: '100 days since Lekki shooting',
            images: [
                {
                    src: lekkiImg,
                    alt: 'Protesters in Lekki'
                },
                {
                    src: lekkiImg2,
                    alt: 'Protesters behind barriers'
                },
                {
                    src: lekkiImg3,
                    alt: '\'We want Justice\' poster'
                },
                {
                    src: lekkiImg4,
                    alt: 'Protesters holding signs'
                }
            ],
            url: match.url + '/1'
        },
        {
            title: 'Breakup with Harmattan',
            images: [
                {
                    src: harmattanImg,
                    alt: 'Done with Dryness campaign photo'
                },
                {
                    src: niveaImg1,
                    alt: 'Nivea blog post'
                },
                {
                    src: niveaImg2,
                    alt: 'Nivea blog post'
                },
                {
                    src: harmattanImg2,
                    alt: 'Woman posing with Nivea products'
                },
                {
                    src: niveaTestemonialImg1,
                    alt: 'Joel Pandora (entrepreneur)\'s testemonial'
                },
                {
                    src: niveaTestemonialImg2,
                    alt: 'Comfort Olatunde (Marketing and Brand Communication Strategist)\'s testemonial'
                },
                {
                    src: twitterImg1,
                    alt: 'Twitter users lambasting the campaign'
                },
                {
                    src: twiiterImg2,
                    alt: 'Twitter users lambasting the campaign'
                },
                {
                    src: instaImg1,
                    alt: 'A man posing for #donewithdryness'
                },
                {
                    src: instaImg2,
                    alt: 'A man posing for #donewithdryness'
                }
            ],
            url: match.url + '/2'
        }
    ]

    return (
        <Switch>
            <Route exact path={match.url}>
                <ContentBlock>
                    <h1 className="content__block__heading">CASE STUDIES</h1>
                    <div  className="content__card__container">
                        <ContentCard type="image" title={caseStudies[0].title} content={caseStudies[0]} />
                        <ContentCard type="image" title={caseStudies[1].title} content={caseStudies[1]} />
                    </div>
                </ContentBlock>
            </Route>
            <Route exact path={match.url + '/1'}>
                <Article title={caseStudies[0].title + ' – AMNESTY CAMPAIGNS JUSTICE FOR VICTIMS'} hero={caseStudies[0].images[0]}>
                    <p>100 days after the shooting of unarmed protesters at the Lekki tollgate plaza on the night of 20 October, 2020, <a target="_blank" href="https://www.amnesty.org/en/countries/africa/nigeria/">Amnesty International, Nigeria</a> launched a digital media campaign entitled <a target="_blank" href="https://www.amnesty.org/en/latest/news/2021/01/nigeria-denials-and-cover-up-mark-100-days-since-lekki-shooting/">“We Want Justice: 100 Days Since Lekki Shooting”</a> to commemorate an event the Human Rights watchdog describes as a dark veil in Nigeria’s history.</p>
                    <img src={caseStudies[0].images[1].src} alt={caseStudies[0].images[1].alt} />
                    <p>In a <a target="_blank" href="https://www.amnesty.org/en/latest/news/2021/01/nigeria-denials-and-cover-up-mark-100-days-since-lekki-shooting/">press statement</a> published via the organization’s website, Amnesty International, Nigeria stated that the objective of the campaign is to call attention to the fact that 100 days since the shooting of #Endsars protesters at the Lekki tollgate plaza, Lagos, Nigeria victims are yet to receive justice. Also, #Endsars protesters still face serious political intimidation and no concrete police reforms have been made.</p>
                    <p>To drive this campaign, Amnesty has promoted a <a target="_blank" href="https://www.instagram.com/p/CLETjCKnZET/?igshid=kawkbx09wjez">video</a> that features young activists and celebrities including Seun Kuti, DJ Cuppy, Jemima Osunde and Mayorkun. The video has so far reached over 2 million people across Instagram and Twitter. However, some reviewers have criticized its use of only young people in driving the campaign. In so doing, it reduces the impact of the Lekki tollgate shooting to something suffered only by young people. Joseph Ahgo, Graphic Designer and Social media Manager for Lifeline Care Association expressed that “a lot of parents suffered loss of their children and could be battling depression and other mental health issues”.</p>
                    <img src={caseStudies[0].images[2].src} alt={caseStudies[0].images[2].alt} />
                    <p>Speaking with Nkem Okwuogu, Digital Communications Manager for Amnesty International, Nigeria, she said that the campaign is in fact a call to entrenching an <a target="_blank" href="https://www.instagram.com/p/CKl_KW2F1-2/?igshid=14h1df1fk1r7">effective justice system for all</a> which the #Endsars incidence has once again reiterated. However, they do not want to downplay the fact that young people were indeed at the center of the #Endsars campaign and were the immediate victims of the Lekki shooting.</p>
                    <p><i>“Amnesty International has consistently led the call for respect for human rights and justice where those rights have been trampled upon whether by the state institutions or individuals. The Endsars protest was evidently a cause championed by young Nigerians with solidarity from across society. We must however, recognize that they were the immediate victims of both the ill addressed by the protest and the shooting of 20th October, 2020.”</i></p>
                    <img src={caseStudies[0].images[3].src} alt={caseStudies[0].images[3].alt} />
                    <p>The campaign is a strong statement in the demand for justice for victims of Lekki tollgate shooting and an <a target="_blank" href="https://www.amnesty.org/en/get-involved/take-action/nigeria-end-impunity-for-police-brutality-end-sars/">open petition</a> is already been signed to impress upon President Buhari and Attorney General, Abubakar Malami to expedite justice and reform the Police.</p>
                </Article>

            </Route>
            <Route exact path={match.url + '/2'}>
                <Article title="#BreakupWithHarmattan – Nivea’s Harmattan Season Skin Care Campaign" hero={caseStudies[1].images[0]}>
                    <p>The harmattan season which usually occurs towards the end of the year and dovetailing to the first quarter of the new year in Nigeria and some other parts of the world is characterized by dry winds and dusty atmosphere. A typical feature of this weather is dry skin and sometimes white patches and cracked lips. It was this mix that was at the center of Nivea’s #BreakupWithHarmattan campaign.</p>
                    <p>Towards the last quarter of the year 2020, <a target="_blank" href="https://en.wikipedia.org/wiki/Nivea">Nivea</a> launched the #BreakupWithHarmattan campaign in Nigeria after earlier running it in Ghana. The campaign ran under other similar copies as #DoneWithDryness and #Harmattan can’t touch this. The main catch of the campaign was a 10-episode mini drama series published consecutively on <a target="_blank" href="https://www.youtube.com/watch?v=i3Jzm9u2h5E">YouTube</a>, Facebook and <a target="_blank" href="https://www.instagram.com/p/CIh_fq0jy1W/">Instagram</a>. The series follows Dalia and her tumultuous relationship with Dusty who is a metaphorical representation of harmattan. Dalia earlier on accepts the proposal of Dusty but soon begins to experience dry skin and cracked lips. With the intervention of her imaginary friend, Dorcas who introduces her to Nivea skincare products she is eventually able to keep Dusty (harmattan) away.</p>
                    <div>
                        <img src={caseStudies[1].images[1].src} alt={caseStudies[1].images[1].alt} />
                        <img src={caseStudies[1].images[2].src} alt={caseStudies[1].images[2].alt} />
                    </div>
                    <p>In a statement by Nivea introducing the campaign, it is clear that part of the essence of the campaign is the promotion of their new range of harmattan products – Nivea Nourishing Cocoa, Nivea Men Revitalizing and Nivea Rich Nourishing. In doing so, it takes advantage of Nigerians’ sensitivity to the harsh harmattan weather.</p>
                    <img src={caseStudies[1].images[3].src} alt={caseStudies[1].images[3].alt} />
                    <p>Nivea has over 23.5m followers on Facebook while <a target="_blank" href="https://www.nivea.com.ng/?">Nivea Nigeria</a> on Instagram as <a target="_blank" href="https://www.instagram.com/nivea_ng/">@nivea_ng</a> has over 125,000 followers. Each episode of the campaign series on their <a target="_blank" href="https://www.youtube.com/channel/UCV1LUA1r8N3haGSlRBGOFng">YouTube channel</a> received an average 400,000+ views in addition to views on Instagram and Facebook. However, the campaign received mixed reactions from a cross-section of the Nigerian audience. Responses on the <a target="_blank" href="https://cultureintelligence.yafri.ca">Culture Intelligence</a> review of the campaign indicate praise for its brilliance in presenting a phenomenon as mundane as weather in a manner that is very relatable. It must also be noted that that each of episode was on average less than a minute thereby making it easy for viewers to snack on and each could pass as advert material in themselves. The campaign was also praised for its timing, considering that it was rolled out just before the beginning of the harmattan season.</p>
                    <div>
                        <img src={caseStudies[1].images[4].src} alt={caseStudies[1].images[4].alt} />
                        <img src={caseStudies[1].images[5].src} alt={caseStudies[1].images[5].alt} />
                    </div>
                    <p>On the other hand, the campaign was criticized for its persistent recourse to mundane stereotypes. In this sense, the campaign followed same pattern of situating the message within a romantic relationship between a man and a woman. Some Twitter users also lamented the its weak storyline alluding to sudden cuts to the climax in the drama.</p>
                    <div>
                        <img src={caseStudies[1].images[6].src} alt={caseStudies[1].images[6].alt} />
                        <img src={caseStudies[1].images[7].src} alt={caseStudies[1].images[7].alt} />
                    </div>
                    <p>The hashtag approach to the campaign which was deployed by way of requesting social media users to <a target="_blank" href="https://www.instagram.com/p/CH8zbvGFvpe/">post a picture of themselves holding up a Nivea product</a> and including any of the #BreakupWithHarmattan or #DoneWithDryness hashtags was not as viral. Both hashtags pooled less than 600 posts cumulatively.</p>
                    <div>
                        <img src={caseStudies[1].images[8].src} alt={caseStudies[1].images[8].alt} />
                        <img src={caseStudies[1].images[9].src} alt={caseStudies[1].images[9].alt} />
                    </div>
                </Article>
            </Route>
        </Switch>
    )
}