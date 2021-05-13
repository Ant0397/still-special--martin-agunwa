import React from 'react'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SocialBar from '../SocialBar'
import NavBar from './NavBar'

export default function Nav() {
    const socialIcons = [
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

    return (
        <div className="navbar__nav">
            <SocialBar icons={socialIcons} />
            <NavBar />
        </div>
    )
}