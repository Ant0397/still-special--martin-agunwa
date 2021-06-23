import React from 'react'
import { Switch } from 'react-router-dom'
import Layout from './components/Layout'
import { ArticleProvider } from './context/ArticleContext'
import { VideoProvider } from './context/VideoContext'

export default function App() {
    return (
        <ArticleProvider>
            <VideoProvider>
                <Switch>
                    <Layout />
                </Switch>
            </VideoProvider>
        </ArticleProvider>
    )
}