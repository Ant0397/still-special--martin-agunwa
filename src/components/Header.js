import React from 'react'
import { NavProvider } from '../context/NavContext'
import Nav from './nav/Nav'
import NavbarBrand from './nav/NavbarBrand'

export default function Header() {

    return (
        <div className={'header'}>
            <NavbarBrand title="Chukwuemeka Martin Agunwa" subtitle="Think. Lead. Inspire" />
            <NavProvider>
                <Nav />
            </NavProvider>
        </div>
    )
}