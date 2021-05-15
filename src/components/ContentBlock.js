import React from 'react'

export default function ContentBlock({ theme, children, media, mediaPosition }) {
    return (
        <div className={`content__block content__block--${theme}`}>
            { media && mediaPosition == 'left' ?
                <div className="content__block__media">
                    { media.map(item => (
                        <img src={item.image} alt={item.alt} />
                    )) }
                </div>
            : 
                null
            }

            <div className={`content__block__body content__block__body--margin-${mediaPosition}`}>
                { children }
            </div>
            
            { media && mediaPosition == 'right' ?
                <div className="content__block__media">
                    { media.map(item => (
                        <img src={item.image} alt={item.alt} />
                    )) }
                </div>
            : 
                null
            }
        </div>
    )
}