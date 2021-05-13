import React from 'react'

export default function Footer({ theme }) {
    return (
        <div className={`footer__wrapper ${theme}`}>
            <div className={`footer__container footer--${theme}`}>
                <p>© {new Date().getFullYear()} by Chukwuemeka Martin Agunwa</p>
            </div>
        </div>
    )
}