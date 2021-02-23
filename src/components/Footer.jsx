import React from 'react'
// import { Container } from 'react-bootstrap'
import Logo from '../assets/img/NekodevLogos/onlylogo_transparent.png'

export const Footer = () => {
    return (
            <footer style={{backgroundColor: '#C4C4C4'}}>
                <div className="my-container">
                    <div id="footer" className="footer">
                            <div className='right-side-ft'>
                                <span className="boldTxt sakontaqto"><p>საკონტაქტო</p></span>
                                <div className="line"></div>
                                <p>Email: Support@nekodev.org</p>
                                <p>+995 599 36 80 88</p>
                                <p>+995 574 00 16 17</p>
                            </div>
                            <div className="footer-logo">
                                <img src={Logo} alt='Logo'></img>
                                <h1 className="boldTxt">NEKODEV</h1>
                            </div>
                    </div>
                </div>
            </footer>
    )
}
