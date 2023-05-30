import React, { useState } from 'react';
import './Navbar.css';
import Logo from "../Assets/text-logo.png";
import OverlayLogo from "../Assets/og-logo.png";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (

        <div id='nav-main-container'>
            <div id='line'></div>
            <nav id='navbar-tag'>
                <a href='#' className='grid-item'>
                    <img id='nav-logo' src={Logo} alt="" />
                </a>

                <div id='nav-links-div' className='grid-item'>
                    <ul id='link-list' className={navbarOpen ? "#link-list active" : "#link-list"}>
                        <li>
                            <img id='overlay-logo' className={navbarOpen ? "#overlay-logo active" : "#overlay-logo"} src={OverlayLogo} alt="" />
                        </li>
                        <li>
                            <a href='#' className='active' onClick={()=>document.querySelector('.hello').scrollIntoView({behavior: 'smooth'})}>Home</a>
                        </li>
                        <li>
                            <a href='#'>Events</a>
                        </li>
                        <li>
                            <a href='#'>Team</a>
                        </li>
                        <li>
                            <a href='#'>Gallery</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </div>

                <div id='social-div' >
                    <ul id='social-list' className={navbarOpen ? "#social-list active" : "#social-list"}>
                        <li>
                            <a href='#'>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="fa-solid fa-envelope"></i>
                            </a>
                        </li>
                    </ul>
                </div>



            </nav >
            <div id='mobile-hamburger' className={navbarOpen ? "#mobile-hamburger active" : "#mobile-hamburger"} onClick={() => setNavbarOpen((prev) => !prev)} >

                {navbarOpen ? <i id="bar" className='fas fa-times'></i> : <i id="bar" className='fas fa-bars'></i>}

            </div>
        </div >
    )
}


export default Navbar
