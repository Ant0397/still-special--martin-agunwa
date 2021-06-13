import React, { useContext, useState } from 'react'
import SocialBar from '../SocialBar'
import NavBar from './NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileNav from './MobileNav'
import { NavContext } from '../../context/NavContext'

export default function Nav() {
    // const [screenWidth, setScreenWidth] = useState(screen.width)
    const [mobileNavOpen, setMobileNavOpen] = useContext(NavContext)

    function toggleNav() {
        setMobileNavOpen(!mobileNavOpen)
    }

    return (
        <div className="navbar__nav">
            {/* { screenWidth < 1000 ? */}
                {/* <FontAwesomeIcon onClick={toggleNav} icon={faBars} size="2x"> */}
                {/* </FontAwesomeIcon>  */}
            {/* : */}
                {/* <> */}
                    <SocialBar />
                    <NavBar />
                {/* </>         */}
            {/* } */}
            {
                mobileNavOpen ? <MobileNav /> : null 
            }
        </div>
    )
}