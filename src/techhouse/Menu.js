import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./headertop/HeaderTop.css";
import faster from '../img/Rectangle 6.png'
import { Link, useParams } from 'react-router-dom';

function Menu() {
    // var settings = {
    //     // dots: true,
    //     arrows: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,

    //     // nextArrow: <button type="button" class="slick-next">Next</button>
    // }
    const { title } = useParams();
    // const { img } = useParams();
    console.log(title);

    return (

        <div className='headertop-left-slider'>
            {title !== null ? (
                <Link to={`/abc/${title}`}><p> HOME/{title}</p></Link>
            ) : (
                <p> </p>
            )}

            {/* <Slider {...settings}>
                <div className='banner-connet '>
                    <h2 className='connet-charge'>CHARGE EVERTHING.</h2>
                    <img src={faster} alt='' className='img-faster' ></img>
                    <button className='btn_banner'>
                        <div className='in_button'>
                            <p>SHOP NOW</p>
                            <i class="far fa-arrow-alt-circle-right arrow_button"></i>
                        </div>
                    </button>
                </div>
                <div className='banner-connet '>
                    <h2 className='connet-charge'>CHARGE EVERTHING.</h2>
                    <img src={faster} alt='' className='img-faster' ></img>
                    <button className='btn_banner'>
                        <div className='in_button'>
                            <p>SHOP NOW</p>
                            <i class="far fa-arrow-alt-circle-right arrow_button"></i>
                        </div>
                    </button>
                </div>
            </Slider> */}
        </div>

    );
}

export default Menu;