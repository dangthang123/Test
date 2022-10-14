import React from 'react';
import '../headertop/HeaderTop.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
function HeaderTop() {
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className='header-top-main container'>
            <div className='header-top-left'>
                <div className='headertop-left-latest fs-14px'>2
                    Latest Announcements :
                </div>
                <div className='headertop-left-slider fs-14px'>
                    <Slider  {...settings}>
                        <div className='headertop-left-title fs-14px'>
                            Due to COVID-19 shipping times may vary.
                        </div>
                        <div className='headertop-left-title fs-14px'>
                            Due tos hipping times may vary.
                        </div>
                    </Slider>
                </div>
            </div>
            <ul className='header-top-right fs-14px'>
                <li ><i className="fa-regular fa-user fs-14px"></i>Login</li>
                <li>|</li>
                <li>Not yet a member?</li>
                <li>|</li>
                <li>SIGN UP NOW</li>
                <li>|</li>
                <li><i className="fa-solid fa-cart-shopping fs-14px"></i>
                    MY CART <span className='number-cart fs-14px'>$0.00 (0)</span></li>

            </ul>
        </div>
    );
}

export default HeaderTop;