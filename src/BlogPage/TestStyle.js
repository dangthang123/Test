// import React from 'react';
// import Slider from 'react-animated-slider';
// // import 'react-animated-slider/build/horizontal.css';
// import "./slider-animations.css";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick-theme.css";
// // import "slick-carousel/slick/slick.css";
// // import "animate.css/animate.min.css";
// // import AnimationOnScroll from 'react-animate-on-scroll';
// // import "./style.css";
// function TestStyle() {

//     const content = [
//         {
//             title: "Vulputate Mollis Ultricies Fermentum Parturient",
//             description:
//                 "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
//             button: "Read More",
//             image: "https://cdn.shopify.com/s/files/1/0036/7306/3491/files/dome1-bnr1.jpg?v=1614360791",
//             user: "Luan Gjokaj",
//             userProfile: "https://i.imgur.com/JSW6mEk.png"
//         },
//         {
//             title: "Tortor Dapibus Commodo Aenean Quam",
//             description:
//                 "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
//             button: "Discover",
//             image: "https://i.imgur.com/DCdBXcq.jpg",
//             user: "Erich Behrens",
//             userProfile: "https://i.imgur.com/0Clfnu7.png"
//         },
//         {
//             title: "Phasellus volutpat metus",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
//             button: "Buy now",
//             image: "https://i.imgur.com/DvmN8Hx.jpg",
//             user: "Bruno Vizovskyy",
//             userProfile: "https://i.imgur.com/4KeKvtH.png"
//         },
//         {
//             title: "Ultricies Vulputate Mollis Fermentum Parturient",
//             description:
//                 "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
//             button: "Read More",
//             image: "https://i.imgur.com/ZXBtVw7.jpg",
//             user: "Luan Gjokaj",
//             userProfile: "https://i.imgur.com/JSW6mEk.png"
//         },
//         {
//             title: "odo Aenean Quam Tortor Dapimodo Aenean Quam",
//             description:
//                 "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis  purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
//             button: "Discover",
//             image: "https://i.imgur.com/DCdBXcq.jpg",
//             user: "Erich Behrens",
//             userProfile: "https://i.imgur.com/0Clfnu7.png"
//         },
//         {
//             title: "volutpat Aenean metus",
//             description:
//                 "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
//             button: "Buy now",
//             image: "https://i.imgur.com/DvmN8Hx.jpg",
//             user: "Bruno Vizovskyy",
//             userProfile: "https://i.imgur.com/4KeKvtH.png"
//         }
//     ];

//     return (
//         <div>

//             {content.map((item, index) => (
//                 <div
//                     key={index}
//                     className="slider-content"

//                 >
//                     <img src={item.image} alt='' style={{ height: '200px' }}></img>

//                     <div className="inner">
//                         <h1>{item.title}</h1>

//                         <button>{item.button}</button>

//                         <p>{item.description}</p>

//                     </div>
//                 </div>
//             ))
//             }


//             <AnimationOnScroll animateIn="animate__fadeInLeftBig">
//                 <h5>Look me too.</h5>
//             </AnimationOnScroll>


//         </div>
//     );
// }

// export default TestStyle;