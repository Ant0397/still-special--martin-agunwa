import React, { useContext, useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'
import { ContentContext } from '../context/ContentContext'
import { routes } from '../routes'
import ContentBlock from './ContentBlock'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    const [caseStudies, videos, blogs] = useContext(ContentContext)

    const [cacheWarning, setCacheWarning] = useState(false)

    useEffect(() => {
        if (__isBrowser__) {
            if (!sessionStorage.getItem('hadCacheWarning')) {
                setCacheWarning(true)
    
                setTimeout(() => {
                    setCacheWarning(false)
                }, 5000)
    
                sessionStorage.setItem('hadCacheWarning', true)
            }
        }
    }, [])

    return (
        routes.map(route => (
            !route.disabled ?
                <Route exact={route.exact ? true : false} path={route.path}>

                    { cacheWarning ?
                    <div className="banner">
                        <p>If you are experiencing issues, try clearing your browser's cache</p>
                    </div>
                    :
                        null
                    }

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