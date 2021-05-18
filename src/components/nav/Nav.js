import React, { useState } from 'react'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SocialBar from '../SocialBar'
import NavBar from './NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    const [screenWidth, setScreenWidth] = useState(screen.width)
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    window.addEventListener('resize', () => {
        setScreenWidth(screen.width)
    })

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

    function toggleNav() {
        setMobileNavOpen(!mobileNavOpen)
    }

    return (
        <div className="navbar__nav">
            { screenWidth < 1000 ?
                <FontAwesomeIcon onClick={toggleNav} icon={faBars} size="2x" />   
            :
                <>
                    <SocialBar icons={socialIcons} />
                    <NavBar />
                </>        
            }
        </div>
    )
}