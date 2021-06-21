import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import ContentBlock from './ContentBlock'

export default function Article({ title, hero, chunks, children }) {
    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)

        return function cleanup() {
            window.scrollTo(0, 0)
        }
    }, [])

    return (
        <ContentBlock justifyText>
            <button onClick={() => history.goBack()} className="btn btn--primary">Back</button>
            <h1 className="content__block__heading">{title}</h1>
            <p><i><strong>By Martin C. Agunwa</strong></i></p>
            { hero ? <img className="hero" src={hero.src} alt={hero.alt} /> : null }
            { chunks ? chunks : null }
            { children ? children : null }
        </ContentBlock>
    )
}