import React from 'react'
import { useHistory } from 'react-router'
import logo from '../../assets/website-logo.jpg'

export default function NavbarBrand({ title, subtitle }) {
    const history = useHistory()
    
    function goHome() {
        history.push('/')
    }

    return (
        <div onClick={goHome} className="navbar__brand">
            <img className="logo" src={logo} alt="Website Logo" />
            <div className="logo-text">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}