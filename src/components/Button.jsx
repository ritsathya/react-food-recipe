import React from 'react'


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
