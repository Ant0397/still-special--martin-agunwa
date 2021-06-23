import React, { useContext } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import ContentBlock from '../components/ContentBlock'
import ContentCard from '../components/ContentCard'
import Article from '../components/Article'
import lekkiImg from '../assets/Lekki.png'
import lekkiImg2 from '../assets/Lekki-2.png'
import lekkiImg3 from '../assets/Lekki-3.png'
import lekkiImg4 from '../assets/Lekki-4.png'
import harmattanImg from '../assets/Harmattan.png'
import niveaImg1 from '../assets/Nivea-1.png'
import niveaImg2 from '../assets/Nivea-2.png'
import harmattanImg2 from '../assets/Harmattan-2.png'
import niveaTestemonialImg1 from '../assets/Nivea-testemonial-1.png'
import niveaTestemonialImg2 from '../assets/Nivea-testemonial-2.png'
import twitterImg1 from '../assets/Twitter-1.png'
import twiiterImg2 from '../assets/Twitter-2.png'
import instaImg1 from '../assets/Insta-1.png'
import instaImg2 from '../assets/Insta-2.png'
import { ArticleContext } from '../context/ArticleContext'
import { titleCase } from '../helpers'

export default function CaseStudies() {
    const match = useRouteMatch()

    const [caseStudies, setCaseStudies] = useContext(ArticleContext)

    return (
        <Switch>
            <Route exact path={match.url}>
                <ContentBlock>
                    <h1 className="content__block__heading">CASE STUDIES</h1>
                    <div  className="content__card__container">
                        { caseStudies ? 
                            caseStudies.map(caseStudy => (
                                <ContentCard type="image" title={titleCase(caseStudy.title)} content={caseStudy} />
                            ))    
                        :
                            null
                        }
                    </div>
                </ContentBlock>
            </Route>
            { caseStudies ?
                caseStudies.map(caseStudy => (
                    <Route exact path={caseStudy.url}>
                        <Article title={caseStudy.title}>
                            { console.log(caseStudy.content) }
                        </Article>
                    </Route>
                ))  
            :
                null
            }
        </Switch>
    )
}