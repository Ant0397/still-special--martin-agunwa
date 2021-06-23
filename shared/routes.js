import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import About from './pages/About'
import Blog from './pages/Blog'
import Campaigns from './pages/Campaigns'
import CaseStudies from './pages/CaseStudies'
import Home from './pages/Home'
import React from 'react'

export const routes = [
    {
        path: '/',
        exact: true,
        theme: 'dark',
        text: 'Home',
        get component() { 
            return <Home theme={this.theme} />
        }
    },
    {
        path: '/about',
        text: 'About',
        component: <About />,
        theme: 'light',
        hasNestedRoute: true,
        dropdown: [
            {
                path: '/about/cv',
                text: 'Curriculum Vitae'
            }
        ]
    },
    { 
        path: '/campaigns',
        component: <Campaigns />,
        theme: 'light',
        text: 'Campaigns',
    },
    {
        path: '/case-study',
        component: <CaseStudies />,
        theme: 'light',
        hasNestedRoute: true,
        text: 'Case Study',
    },
    {
        path: '/contact',
        text: 'Contact',
        disabled: true
    },
    {
        path: '/blog',
        component: <Blog />,
        theme: 'light',
        hasNestedRoute: true,
        text: 'Blog',
    }
]

export const socials = [
    {
        name: 'twitter',
        icon: faTwitter,
        size: '2x',
        url: 'https://twitter.com/eazymartinez'
    },
    {
        name: 'facebook',
        icon: faFacebookF,
        size: '2x',
        url: 'https://www.facebook.com/marayo11/'
    },
    {
        name: 'instagram',
        icon: faInstagram,
        size: '2x',
        url: 'https://www.instagram.com/eazymartinez/'
    },
    {
        name: 'linkedin',
        icon: faLinkedin,
        size: '2x',
        url: 'https://www.linkedin.com/in/martin-agunwa-168491a9/'
    }
]