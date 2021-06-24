import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import ContentBlock from './ContentBlock'

export default function Article({ content }) {
    const history = useHistory()

    if (__isBrowser__) {
        useEffect(() => {
            window.scrollTo(0, 0)
            document.querySelector('.content__block__body').insertAdjacentHTML('beforeend', content.content)
    
            return function cleanup() {
                setTimeout(() => {
                    window.scrollTo(0, 0)
                }, 10)
            }
        }, [])
    }

    return (
        <ContentBlock justifyText>
            <button onClick={() => history.goBack()} className="btn btn--primary">Back</button>
            <h1 className="content__block__heading">{content.longTitle}</h1>
            <p><i><strong>By Martin C. Agunwa</strong></i></p>
            { content.heroImgSrc && content.heroImgAlt ? <img className="hero" src={content.heroImgSrc} alt={content.heroImgAlt} /> : null }
        </ContentBlock>
    )
}