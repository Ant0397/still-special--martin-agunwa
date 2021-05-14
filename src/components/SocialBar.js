import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialBar({ icons }) {
    return (
        <div>
            { icons ? 
                icons.map(icon => (
                    <a className="social" href={icon.url} target="_blank">
                        <FontAwesomeIcon className="social" icon={icon.icon} size={icon.size} />
                    </a>
                ))
            :
                null
            }
        </div>
    )
}