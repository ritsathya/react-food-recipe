import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ className, label, icon }) => {
    return (
        <a className={`btn ${className}`} href='#'>
            <span>
                {icon}
            </span>
            {" "+label}
        </a>
    )
}


export default Button
