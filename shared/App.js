import React from 'react'
import { Switch } from 'react-router-dom'
import Layout from './components/Layout'
import { AnalyticsProvider } from './context/AnalyticsContext'
import { ContentProvider } from './context/ContentContext'

export default function App() {
    return (
        <ContentProvider>
            <AnalyticsProvider>
                <Switch>
                    <Layout />
                </Switch>
            </AnalyticsProvider>
        </ContentProvider>
    )
}