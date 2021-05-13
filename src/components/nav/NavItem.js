import React, { useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

export default function NavItem({ link }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const match = useRouteMatch()

    function toggleDropdown(e) {
        e.type == 'mouseover' ? setDropdownOpen(true) : setDropdownOpen(false)
    }

    function setActiveClass() {
        return link.path == match.url ? 'nav__link--active' : ''
    }

    function renderLink(link) {
        if (link.dropdown) {
           return <div onMouseLeave={toggleDropdown} className="nav__link--dropdown-container">
                <NavLink onMouseOver={toggleDropdown} exact to={link.path} className={`nav__link ${setActiveClass()}`}>{link.text}</NavLink>
                { link.dropdown && dropdownOpen ?
                    link.dropdown.map(dropdownLink => (
                        <NavLink exact to={dropdownLink.path} className={`nav__link nav__link--dropdown`}>{dropdownLink.text}</NavLink>
                    ))  
                :
                    null
                }
            </div>
        } else {
            return <NavLink exact to={link.path} className={`nav__link ${setActiveClass()}`}>{link.text}</NavLink>
        }
    }

    return (
        renderLink(link)
    )
}