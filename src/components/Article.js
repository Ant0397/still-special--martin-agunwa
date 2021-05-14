import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import ContentBlock from './ContentBlock'

export default function Article({ title, children }) {
    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <ContentBlock>
            <button onClick={() => history.goBack()} className="btn btn--primary btn--back">Back</button>
            <h1 className="content__block__heading">{title}</h1>
            <p><i><strong>By Martin C. Agunwa</strong></i></p>
            { children }
        </ContentBlock>
    )
}