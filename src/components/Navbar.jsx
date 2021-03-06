import React from 'react'
import MainLogo from '../assets/img/NekodevLogos/onlylogo_transparent.png'
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'





export const Navbar = ({ title }) => {

    library.add(faBars)


    return ( 
        <div className="header">
                <ul className="nav-li">
                    <div className="left-nav">
                        <li><a href="https://Nekodev.org">
                                <img src={MainLogo} alt="NEKODEV_LOGO"/>
                                <h1>{title}</h1>
                            </a>
                        </li>
                    </div>
                    <nav className="right-nav zoom-anim">
                        <li><a href="#home">მთავარი</a></li>
                        <li><a href="#about">ჩვენს შესახებ</a></li>
                        <li><a href="#about-work">როგორ ვმუშაობთ</a></li>
                        <li><a href="#offers">რას გთავაზობთ</a></li>
                        <li><a href="#contact-form">კონტაქტი</a></li>
                    </nav>
                    <FontAwesomeIcon icon="bars"/>
                </ul>
        </div>
    )
}
