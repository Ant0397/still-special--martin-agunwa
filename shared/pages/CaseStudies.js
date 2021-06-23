import React, { useContext } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import ContentBlock from '../components/ContentBlock'
import ContentCard from '../components/ContentCard'
import Article from '../components/Article'
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
                        <Article content={caseStudy.content} title={titleCase(caseStudy.title)} />
                    </Route>
                ))  
            :
                null
            }
        </Switch>
    )
}