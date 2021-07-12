import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AnalyticsContext } from '../context/AnalyticsContext'
import ContentService from '../services/ContentService'
import AnalyticsBar from './AnalyticsBar'
import ContentBlock from './ContentBlock'
import ShareBar from './ShareBar'

export default function Article({ content }) {
    const [analytics, setAnalytics] = useContext(AnalyticsContext)
    const history = useHistory()

    if (__isBrowser__) {
        useEffect(() => {
            window.scrollTo(0, 0)
            document.querySelector('#share').insertAdjacentHTML('beforebegin', content.content)

            ContentService.updateAnalytic(content.name, 'views', content.views + 1)
                .then(err => {
                    if (err) {
                        console.log(err.messages)
                    } else {
                        setAnalytics(analytics.map(analytic => {
                            return analytic.name == content.name
                            ? {...analytic, views: analytic.views + 1}
                            : analytic
                        }))
                    }
                })

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
            <img className="hero" src={content.thumbnailImgSrc} alt={content.thumbnailImgAlt} />
            <AnalyticsBar content={content} />
            <ShareBar id="share" contentType="content" contentUrl={'martinagunwa.co.uk' + content.url} />
        </ContentBlock>
    )
}