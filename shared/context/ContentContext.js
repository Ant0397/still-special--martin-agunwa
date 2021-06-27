import React, { createContext, useEffect, useState } from 'react'
import ContentService from '../services/ContentService'

export const ContentContext = createContext()

export function ContentProvider({ children }) {
    const [caseStudies, setCaseStudies] = useState(null)
    const [blogs, setBlogs] = useState(null)
    const [videos, setVideos] = useState(null)

    useEffect(() => {
        ContentService.retrieve()
            .then(data => {
                setCaseStudies(data.filter(article => article.subCategory == 'case-study'))
                setBlogs(data.filter(article => article.subCategory == 'blog'))
                setVideos(data.filter(video => video.category == 'video'))
            })
    }, [])

    return (
        <ContentContext.Provider value={[caseStudies, blogs, videos]}>
            { children }
        </ContentContext.Provider>
    )
}