import React from 'react'
import Footer from '../Footer';

import Navbar from "../Navbar";

function View() {
    return (
        <>
            <Navbar path="/view"/>
            <div className='d-flex flex-column '>
                <div className='d-flex justify-content-end'>
                    <button className='shadow-none'><i className="far fa-flag fa-2x my-2"></i></button>
                    <button><i className="far fa-heart fa-2x m-2 mx-4"></i></button>
                </div>
                <img className='view-image' src="images/beef-nachos.jpg" alt="beef-nachos" />
            </div>
        </>
    )
}

export default View;

