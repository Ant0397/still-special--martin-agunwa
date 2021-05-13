import React from 'react'
import NavItem from './NavItem'

export default function NavBar() {
    const links = [
        {
            path: '/',
            text: 'Home',
        },
        {
            path: '/about',
            text: 'About',
            dropdown: [
                {
                    path: '/about/cv',
                    text: 'Curriculum Vitae'
                }
            ]
        },
        {
            path: '/campaigns',
            text: 'Campaigns',
        },
        {
            path: '/case-study',
            text: 'Case Study',
        },
        {
            path: '/contact',
            text: 'Contact',
        },
        {
            path: '/blog',
            text: 'Blog',
        }
    ]

    return (
        <div className="nav__links">
            { links.map(link => (
                <NavItem link={link} />
            ))}
        </div>
    )
}