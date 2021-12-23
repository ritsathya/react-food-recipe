import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='navbar d-flex align-items-center'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
                    </Link>
                </div>     
            </nav> 
        </>
    )
}

export default Navbar
