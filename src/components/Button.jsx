import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, wdth, hght, fontsize }) => {
    return (
            <button className='btn' 
            style={{
                border: 'none', 
                width: wdth, 
                height: hght,
                borderRadius: '15px',
                fontSize: fontsize,
                color: '#fff',
            }}
            onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    wdth: '300px',
    hght: '70px',
    fontsize: '20px'
}

Button.prototype = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    wdth: PropTypes.string,
    hght: PropTypes.string,
    fontsize: PropTypes.number,
}

export default Button
