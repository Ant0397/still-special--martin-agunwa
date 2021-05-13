import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/Header'
import About from './components/pages/About'
import Campaigns from './components/pages/Campaigns'
import CaseStudies from './components/pages/CaseStudies'
import Footer from './Footer'
import Blog from './components/pages/Blog'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Home />
                    <Footer theme="dark" />
                </Route>
                <Route path="/about">
                    <Header />
                    <About />
                    <Footer />
                </Route>
                <Route path="/campaigns">
                    <Header />
                    <Campaigns />
                    <Footer />
                </Route>
                <Route path="/case-study">
                    <Header />
                    <CaseStudies />
                    <Footer />
                </Route>
                <Route path="/blog">
                    <Header />
                    <Blog />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    )
}