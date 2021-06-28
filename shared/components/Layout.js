import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'
import { ContentContext } from '../context/ContentContext'
import { routes } from '../routes'
import ContentBlock from './ContentBlock'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    const [caseStudies, videos, blogs] = useContext(ContentContext)

    return (
        routes.map(route => (
            !route.disabled ?
                <Route exact={route.exact ? true : false} path={route.path}>
                    <Header />

                    { route.component }

                    { route.hasLoader ?
                        !blogs || !videos || !caseStudies ?
                            <ContentBlock>
                                <SyncLoader color="#FCC62B" loading={true} />
                            </ContentBlock>    
                        :
                            null 
                    :
                        null
                    }

                    <Footer theme={route.theme} />
                </Route>
            :
                null
        ))
    )
}