import React from 'react';
import './footer.css';
import logoW from '../img/LOGO_WHITE.png';
import logo from '../img/tải xuống.png';
import img1 from '../img/aht-tech-jsc.png';
import img2 from '../img/mage-solution.png';
import img3 from '../img/onnet-consulting.png';

function Footerr() {
    return (
        <div className='footer-main'>
            <div className='footer-wapper container'>

                <div className='footer-section-inner'>
                    {/* _______LOGO______ */}
                    <div className='footer-logo'>
                        <a href='#' className='logo-img'><img src={logoW} alt='logoW'></img></a>
                        <p className='footer-info'>
                            <span>ONEXT DIGITal</span>
                            helps your business grow through the utilization
                            of technology and an innovative mindset. We have a
                            history of going over and above because we not only
                            complete projects on time &#9472; we find ways to support our
                            customers to achieve their specific goals.
                        </p>

                        <div className='footer-widgets-social'>
                            <a href='#'><i className="fa-brands fa-facebook"></i></a>
                            <a href='#'><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>

                        <div className='skew-rating-rating'>
                            <a href='#' className='skew-rating-icon'>
                                <img src={logo} alt='logo'></img>
                            </a>
                            <div className='skew-rating-rating-content-layer'>
                                <div className='skew-rating-rating-score'>
                                    <p className='rating-dark'>4.8</p>
                                    <div className='reviews-totals-stars'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span>&nbsp;(2)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* _______CONTENT_______________ */}
                    <div className='footer-top has-footer-menu'>
                        <div className='footer-services'>
                            <h5>Services</h5>
                            <ul>
                                <li><a href='#'>Web Development</a></li>
                                <li><a href='#'>Mobile App Development</a></li>
                                <li><a href='#'>UX/UI Design Service</a></li>
                                <li><a href='#'>Headless Commerce Development</a></li>
                                <li><a href='#'>White label software service</a></li>
                            </ul>
                        </div>

                        <div className='footer-about'>
                            <h5>Aboutt Us</h5>
                            <ul>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Blog</a></li>
                                <li><a href='#'>Case studies</a></li>
                                <li><a href='#'>Careers</a></li>
                            </ul>
                        </div>

                        <div className='footer-contact'>
                            <h5>contact</h5>
                            <ul>
                                <li><a href='#'><i className="fa-brands fa-whatsapp"></i>WhatsApp</a></li>
                                <li><a href='#'><i className="fa-brands fa-skype"></i>Skype</a></li>
                                <li><a href='#'><i className="fa-solid fa-envelope"></i>info@onextdigital.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* _____________association_____ */}
                <div className='footer-association'>
                    <a href='#'> <img src={img1} alt='img1'></img></a>
                    <a href='#'><img src={img2} alt='img2'></img></a>
                    <a href='#'> <img src={img3} alt='img3'></img></a>
                </div>
                {/* _____________credits_____ */}
                <div className='footer-credits'>
                    <p id='year'>Copyright &#169;
                        {(new Date().getFullYear())}
                        . ONEXT DIGITAL
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Footerr;