import React, { createContext, useState } from 'react'

export const NavContext = createContext()

export function NavProvider({ children }) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <NavContext.Provider value={[mobileNavOpen, setMobileNavOpen]}>
            { children }
        </NavContext.Provider>
    )
}