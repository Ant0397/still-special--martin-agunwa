import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socials } from '../links'

export default function SocialBar() {
    return (
        <div className="social__bar">
            { socials ? 
                socials.map(social => (
                    <a className="social" href={social.url} target="_blank">
                        <FontAwesomeIcon className="social" icon={social.icon} size={social.size} />
                    </a>
                ))
            :
                null
            }
        </div>
    )
}