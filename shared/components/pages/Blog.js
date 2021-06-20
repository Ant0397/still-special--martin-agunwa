import React, { useContext } from 'react'
import { Route, Switch } from 'react-router'
import ContentBlock from '../ContentBlock'
import ContentCard from '../ContentCard'
import Article from '../Article'
import { BlogContext } from '../../context/BlogContext'
import { titleCase } from '../../helpers'

export default function Blog() {
    const blogs = useContext(BlogContext)

    return (
        <Switch>
            <Route exact path='/blog'>
                <ContentBlock>
                    <h1 className="content__block__heading">BLOG</h1>
                    <div  className="content__card__container">
                        { blogs ? 
                            blogs.map(blog => (
                                <ContentCard type="image" title={titleCase(blog.title)} content={blog} />
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
                        <Article title={titleCase(blog.title)} hero={blog.images[0]} chunks={blog.chunks} />
                    </Route>
                ))    
            :
                null
            }
        </Switch>
    )
}