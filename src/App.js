import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/Header'
import About from './components/pages/About'
import Campaigns from './components/pages/Campaigns'
import CaseStudies from './components/pages/CaseStudies'
import Footer from './components/Footer'
import Blog from './components/pages/Blog'
import { BlogProvider } from './context/BlogContext'
import { VideoProvider } from './context/VideoContext'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {/* <Header /> */}
                    <BlogProvider>
                        <VideoProvider>
                            <Home theme="dark" />
                        </VideoProvider>
                    </BlogProvider>
                    <Footer theme="dark" />
                </Route>
                <Route path="/about">
                    <Header />
                    <About />
                    <Footer />
                </Route>
                <Route path="/campaigns">
                    <Header />
                    <VideoProvider>
                        <Campaigns />
                    </VideoProvider>
                    <Footer />
                </Route>
                <Route path="/case-study">
                    <Header />
                    <CaseStudies />
                    <Footer />
                </Route>
                <Route path="/blog">
                    <Header />
                    <BlogProvider>
                        <Blog />
                    </BlogProvider>
                    <Footer />
                </Route>
            </Switch>
        </Router>
    )
}