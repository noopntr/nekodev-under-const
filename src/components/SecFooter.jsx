import React from 'react'

export const SecFooter = () => {
    return (
        <footer className="sec-footer">
            <div className="my-container">
                <div id="footer-Two" className="sec-footer-body"
                style={{backgroundColor: '#A4A4A4'}}>
                    <div className=''>
                        <p>&#169; Copyright 2020. All Rights Reserved by NEKODEV</p>
                    </div>
                    <span className="sec-footer-right">
                        <p><a href="/">პირობები</a></p>
                        <p><a href="/">Privacy & policy</a></p>
                        <p><a href="/">დახმარება</a></p>
                    </span>
                </div>
            </div>
        </footer>
    )
}
