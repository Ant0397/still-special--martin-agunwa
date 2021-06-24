import React, { createContext, useEffect, useState } from 'react'
import ArticleService from '../services/ArticleService'

export const ArticleContext = createContext()

export function ArticleProvider({ children }) {
    const [caseStudies, setCaseStudies] = useState(null)
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        ArticleService.retrieve()
            .then(data => {
                setCaseStudies(data.filter(article => article.type == 'case-study'))
                setBlogs(data.filter(article => article.type == 'blog'))
            })
    }, [])

    return (
        <ArticleContext.Provider value={[caseStudies, setCaseStudies, blogs, setBlogs]}>
            { children }
        </ArticleContext.Provider>
    )
}