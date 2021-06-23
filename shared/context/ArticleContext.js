import React, { createContext, useEffect, useState } from 'react'

export const ArticleContext = createContext()

export function ArticleProvider({ children }) {
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        fetch('/api/articles/case-study')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    return (
        <ArticleContext.Provider value={[articles, setArticles]}>
            { children }
        </ArticleContext.Provider>
    )
}