import React, { useContext } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import ContentBlock from '../components/ContentBlock'
import ContentCard from '../components/ContentCard'
import Article from '../components/Article'
import { ContentContext } from '../context/ContentContext'

export default function CaseStudies() {
    const match = useRouteMatch()

    const [caseStudies] = useContext(ContentContext)

    return (
        <Switch>
            <Route exact path={match.url}>
                <ContentBlock>
                    <h1 className="content__block__heading">CASE STUDIES</h1>
                    <div  className="content__card__container">
                        { caseStudies ? 
                            caseStudies.map(caseStudy => (
                                <ContentCard content={caseStudy} />
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
                        <Article content={caseStudy} />
                    </Route>
                ))  
            :
                null
            }
        </Switch>
    )
}