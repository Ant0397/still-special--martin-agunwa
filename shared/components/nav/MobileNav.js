import React, { useContext } from 'react'
import { NavContext } from '../../context/NavContext'
import SocialBar from '../SocialBar'
import NavBar from './NavBar'

export default function MobileNav() {
    const [mobileNavOpen, setMobileNavOpen] = useContext(NavContext)

    return (
        <div onClick={() => setMobileNavOpen(false)} className="modal">
            <div className="mobile__nav__container">
                <NavBar />
                <SocialBar />
            </div>
        </div>
    )
}