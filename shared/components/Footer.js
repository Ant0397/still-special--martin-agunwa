import React from 'react'

export default function Footer({ theme }) {
    return (
        <div className={`footer__block ${theme ? `footer__block--${theme}` : ''}`}>
            <div className={`footer__container ${theme ? `footer__container--${theme}` : ''}`}>
                <p>© {new Date().getFullYear()} by Chukwuemeka Martin Agunwa</p>
            </div>
        </div>
    )
}