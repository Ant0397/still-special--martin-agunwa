import React from 'react'

export default function ContentBlock({ theme, quote, children, media, mediaPosition, justifyText }) {
    return (
        <div className={`${quote ? "content__block--quote" : ""} content__block  ${theme ? "content__block--" + theme : ""}`}>
            { media && mediaPosition == 'left' ?
                <div className="content__block__media">
                    { media.map(item => (
                        <img src={item.src} alt={item.alt} />
                    )) }
                </div>
            : 
                null
            }

            <div className={`${justifyText ? "justify" : ""} content__block__body ${mediaPosition ? "content__block__body--margin-" + mediaPosition : ""}`}>
                { children }
            </div>
            
            { media && mediaPosition == 'right' ?
                <div className="content__block__media">
                    { media.map(item => (
                        <img src={item.src} alt={item.alt} />
                    )) }
                </div>  
            : 
                null
            }
        </div>
    )
}