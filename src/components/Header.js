import React, {useCallback} from "react";
import './Components.css';

import {Outlet, useNavigate} from "react-router";
import {Link} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const navigateHome = useCallback(() => {
        navigate('/Home')
    })
    const navigateAbout = useCallback(() => {
        navigate('/About')
    })
    const navigateContact = useCallback(() => {
        navigate('/Contact')
    })


    return (
        <div className={'container'}>
            <nav className={'nav'}>
                <ul className={'nav__block'}>
                    <li onClick={navigateHome} className={'nav__list'}>HOME</li>
                    <li onClick={navigateAbout} className={'nav__list'}>ABOUT</li>
                    <li onClick={navigateContact} className={'nav__list'}>CONTACT</li>
                    <li className={'nav__list reload'}>
                        <Link to={'/'}>RELOAD</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Header