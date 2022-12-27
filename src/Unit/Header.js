import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import img from '../img/banner-02.png';
import logoB from '../img/LOGO_brown.png';
import logoW from '../img/LOGO_WHITE.png'
function Header() {

    const [top, setTop] = useState('');

    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 150) {
                setTop('scroll-header')
            }
            else {
                setTop('')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {

            window.removeEventListener('scroll', handleScroll)
        }

    }, [])
    // console.log(top);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <div className='header'>
            <div className={`header-main ${top}`}>
                <div className='header-wapper section-inner'>
                    {/* _______LOGO______ */}
                    <div className='header-logo-wapper'>
                        <img className='LOGO_brown' src={logoB} alt='LOGO_brown'></img>
                        <img className='LOGO_WHITE' src={logoW} alt='LOGO_WHITE'></img>
                    </div>

                    {/* _______NAVIGATION______ */}
                    <ul ref={navRef} className='header-navigation-wrapper'>
                        <li><a href='#'>home</a></li>
                        <li >
                            <a href='#'>Services</a>
                            <span><i className="fa-solid fa-chevron-down"></i></span>
                            {/* _______SUB-Menu______ */}
                            <ul className='header-sub-menu'>
                                <li><a href='#'>Web Development</a></li>
                                <li><a href='#'>White label software service</a></li>
                                <li><a href='#'>UX/UI Design Service</a></li>
                                <li><a href='#'>Mobile App Development</a></li>
                                <li><a href='#'>Hire developers</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Our solutions</a></li>
                        <li><a href='#'>Case studies</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li className='get-in'><a href='#'>GET IN TOUch</a></li>

                        {/* _______ICON-MOBI_________ */}


                    </ul>
                    <button className="nav-btn" onClick={showNavbar}>
                        <i className="fa-solid fa-bars"></i>
                    </button>

                </div>
            </div>
            <div className='banner' >
                {/* <img src={img} alt='img'></img> */}
            </div>
        </div>
    );
}

export default Header;