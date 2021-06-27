import React, { useContext } from 'react'
import { Route, Switch } from 'react-router'
import ContentBlock from '../components/ContentBlock'
import ContentCard from '../components/ContentCard'
import Article from '../components/Article'
import { useRouteMatch } from 'react-router-dom'
import { ContentContext } from '../context/ContentContext'

export default function Blog() {
    const [caseStudies, blogs] = useContext(ContentContext)

    const match = useRouteMatch()

    return (
        <Switch>
            <Route exact path={match.url}>
                <ContentBlock>
                    <h1 className="content__block__heading">BLOG</h1>
                    <div className="content__card__container">
                        { blogs ? 
                            blogs.map(blog => (
                                <ContentCard content={blog} />
                            ))   
                        :
                            null 
                        }
                    </div>
                </ContentBlock>
            </Route>
            { blogs ? 
                blogs.map(blog => (
                    <Route exact path={blog.url}>
                        <Article content={blog} />
                    </Route>
                ))    
            :
                null
            }
        </Switch>
    )
}