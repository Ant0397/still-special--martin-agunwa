import React from 'react'
import { useHistory } from 'react-router'
import ContentBlock from './ContentBlock'

export default function Article({ title, children }) {
    const history = useHistory()

    return (
        <ContentBlock>
            <button onClick={() => history.goBack()} className="btn btn--primary btn--back">Back</button>
            <h1 className="content__block__header">{title}</h1>
            <p><i><strong>By Martin C. Agunwa</strong></i></p>
            { children }
        </ContentBlock>
    )
}