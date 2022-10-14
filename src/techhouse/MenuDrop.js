import { Apple } from '@mui/icons-material';
import React, { useState } from 'react';
import a1 from '../img/Rectangle 7.png';
import a2 from '../img/Rectangle 9.png';
import a3 from '../img/Rectangle 10.png';
import a4 from '../img/Rectangle 6.png';
import { Link, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";


function MenuDrop() {
    // const [nav1, setNav1] = useState();
    // const [nav2, setNav2] = useState();
    // const data =
    //     [
    //         {
    //             id: 1,
    //             title: 'First 1',
    //             img: a1,
    //             abc: "bacba"
    //         }, {
    //             id: 2,
    //             title: 'First 2',
    //             img: a2
    //         }, {
    //             id: 3,
    //             title: 'bh',
    //             img: a3
    //         }, {
    //             id: 4,
    //             title: 'First 4',
    //             img: a4
    //         },
    //     ];

    // console.log(data);
    return (
        <div>
            {/* <div className='location-list'>
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ac
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                ac
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                                nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
                                duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div> */}
            {/* <h2>Slider Syncing (AsNavFor)</h2>
            <h4>First Slider</h4>
            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
            <h4>Second Slider</h4>
            <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider> */}
        </div>
        // <ul className='main'>
        //     {data.map((item, ind) => (
        //         <li key={ind}> <Link to={`/${item.title}`}>{item.title}</Link></li>
        //     ))}

        //     <Routes>
        //         <Route path='/:title' element={<Menu />} />
        //     </Routes>
        // </ul>

    );
}

export default MenuDrop;