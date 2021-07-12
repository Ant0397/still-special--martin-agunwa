import React from 'react'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socials } from '../routes'

export default function ShareBar({ contentUrl, id, contentType }) {
    function renderShareBtn(social, icon) {
        switch (social.name) {
            case 'facebook':
                return <FacebookShareButton url={contentUrl}>
                    { icon }
                </FacebookShareButton>

            case 'twitter':
                return <TwitterShareButton url={contentUrl}>
                    { icon }
                </TwitterShareButton>

            case 'linkedin': 
                return <LinkedinShareButton url={contentUrl}>
                    { icon }
                </LinkedinShareButton>
        }
    }

    return (
        <div id={id ? id : ""} className="social__container--share">
            <p>Share this { contentType } </p>
            <div className="social__bar--share">
                { socials.map(social => (
                    renderShareBtn(social, <FontAwesomeIcon className="social share" icon={social.icon} />)
                )) }
            </div>
        </div>
    )
}