import React from 'react'
import ContentBlock from './ContentBlock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default function Quote({ text, theme, author }) {
    return (
        <ContentBlock theme={theme} quote>
            <FontAwesomeIcon className="quotations quote__start" icon={faQuoteLeft} size="4x" />
            <p className="quote quote__text"><i>{text}</i></p>
            <FontAwesomeIcon className="quotations quote__end" icon={faQuoteRight} size="4x" />
            <p className="quote quote__text quote__author">- {author}</p>
        </ContentBlock>
    )
}