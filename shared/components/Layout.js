import React from 'react'
import { Route } from 'react-router-dom'
import { routes } from '../routes'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    return (
        routes.map(route => (
            !route.disabled ?
                <Route exact={route.exact ? true : false} path={route.path}>
                    <Header />
                    { route.component }
                    <Footer theme={route.theme} />
                </Route>
            :
                null
        ))
    )
}