import React from 'react'
import NavItem from './NavItem'
import { routes } from '../../routes'

export default function NavBar() {

    return (
        <div className="nav__links">
            { routes.map(route => (
                !route.disabled ?
                    <NavItem link={route} />
                :
                    null
            ))}
        </div>
    )
}