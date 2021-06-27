import React, { createContext, useState, useEffect } from 'react'
import ContentService from '../services/ContentService'

export const AnalyticsContext = createContext()

export function AnalyticsProvider({ children }) {
    const [analytics, setAnalytics] = useState(null)

    useEffect(() => {
        ContentService.retrieve()
            .then(data => setAnalytics(data.map(item => (
                {
                    name: item.name,
                    likes: item.likes,
                    views: item.views
                }
            ))))
    }, [])

    return (
        <AnalyticsContext.Provider value={[analytics, setAnalytics]}>
            { children }
        </AnalyticsContext.Provider>
    )
}