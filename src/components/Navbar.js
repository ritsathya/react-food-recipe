import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import Button from './Button';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container container-fluid">
                    <a class="navbar-brand" href="#">
                    <img  id="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
                        <div class="navbar-nav gap-3">
                        <Button className='btn-edit' label='' icon={<i class="fas fa-tasks"></i>}/>
                        <Button className='btn-post' label='' icon={<i class="fas fa-edit"></i>} />
                        <div class="separator"></div>
                        <Button className='btn-login' label='Login' icon={<i class="fas fa-sign-in-alt"></i>} />
                        </div>
                    </div>
                </div>
            </nav> 
        </>
    )
}

export default Navbar
