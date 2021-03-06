import React, { useContext, useState } from 'react'
import SocialBar from '../SocialBar'
import NavBar from './NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileNav from './MobileNav'
import { NavContext } from '../../context/NavContext'

export default function Nav() {
    const [screenWidth, setScreenWidth] = useState(__isBrowser__ ? screen.width : null)
    const [mobileNavOpen, setMobileNavOpen] = useContext(NavContext)

    return (
        <div className="navbar__nav">
            { screenWidth && screenWidth < 1000 ?
                <FontAwesomeIcon onClick={() => setMobileNavOpen(!mobileNavOpen)} icon={faBars} size="2x" />
            :
                <>
                    <SocialBar />
                    <NavBar />
                </>        
            }
            {
                mobileNavOpen ? <MobileNav /> : null 
            }
        </div>
    )
}