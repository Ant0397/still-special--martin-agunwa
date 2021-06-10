import React from 'react'
import NavItem from './NavItem'
import { routes } from '../../links'

export default function NavBar() {

    return (
        <div className="nav__links">
            { routes.map(route => (
                <NavItem link={route} />
            ))}
        </div>
    )
}