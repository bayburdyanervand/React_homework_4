import React from "react";
import './Components.css'

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'container'}>
                <ul className={'footer__block'}>
                    <li className={'footer__list'}>Facebook</li>
                    <li className={'footer__list'}>Twitter</li>
                    <li className={'footer__list'}>Instagram</li>
                    <li className={'footer__list'}>Linkedin</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer