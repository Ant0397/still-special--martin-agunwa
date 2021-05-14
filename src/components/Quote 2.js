import React from 'react'
import ContentBlock from './ContentBlock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default function Quote({ text }) {
    return (
        <ContentBlock>
                <FontAwesomeIcon className="quote__left" icon={faQuoteLeft} size="6x" />
                <p className="quote__text">{text}</p>
                <FontAwesomeIcon className="quote__right" icon={faQuoteRight} size="6x" />
        </ContentBlock>
    )
}