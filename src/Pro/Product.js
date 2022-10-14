// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, Routes, Route } from 'react-router-dom';
// import Api2 from '../Api/Api2';
// import Detail from './Detail';
// // import { fetchProducts } from '../Pro/redux/slices/product-slice';
// // import { listproduct } from './redux/action/productaction';
// import { listproduct } from './redux/action/fetchdata';
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// function Product() {
//     // const useF = Api2();
//     // const valuesF = useF;
//     // console.log(valuesF);

//     // const dispatch = useDispatch();
//     // const products = useSelector((state) => state.products);
//     // // console.log(products);
//     // useEffect(() => {
//     //     dispatch(fetchProducts());
//     // }, [dispatch]);
//     // // let data = products.list;
//     // console.log(products);

//     // const dispatch = useDispatch();
//     // const productList = useSelector((state) => state.productlist);
//     // // console.log(productList);
//     // const { loading, error, products } = productList;
//     // // console.log(loading);
//     // useEffect(() => {
//     //     dispatch(listproduct());
//     // }, [dispatch])


//     // const WooCommerce = new WooCommerceRestApi({
//     //     url: 'http://localhost/dataWP', // Your store URL
//     //     consumerKey: 'ck_51598e6da8fb6d61881586f6c4e8c1f84a252d65', // Your consumer key
//     //     consumerSecret: 'cs_d9eb850da059823b36beb17daeed12445dd10d15', // Your consumer secret
//     //     version: 'wc/v3' // WooCommerce WP REST API version
//     // });

//     // const WooCommerce = new WooCommerceRestApi({
//     //     url: 'https://72.arrowhitech.net/tn3/reactjs_thang/backend', // Your store URL
//     //     consumerKey: 'ck_fbe7aaa0fddce48d19779e7f69c669d4b617d3e5', // Your consumer key
//     //     consumerSecret: 'cs_28efc0dc44ace202e46c2420f8b7e5462ade95cc', // Your consumer secret
//     //     version: 'wc/v3' // WooCommerce WP REST API version
//     // });

//     // const WooCommerce = new WooCommerceRestApi({
//     //     url: 'https://72.arrowhitech.net/tn3/thanh_reactjs/ShopNature', // Your store URL
//     //     consumerKey: 'ck_d77b2f06713eab0b76873176a0b14ffe8a041bc5', // Your consumer key
//     //     consumerSecret: 'cs_22508887be945bb2ca554c4ea49cd0c4c7d5eba3', // Your consumer secret
//     //     version: 'wc/v3' // WooCommerce WP REST API version
//     // });
//     const data = {
//         payment_method: "bacs",
//         payment_method_title: "Direct Bank Transfer",
//         set_paid: true,
//         billing: {
//             first_name: "Thang ",
//             last_name: "Doe",
//             address_1: "969 Market",
//             address_2: "",
//             city: "San Francisco",
//             state: "CA",
//             postcode: "94103",
//             country: "US",
//             email: "john.doe@example.com",
//             phone: "(555) 555-5555"
//         },
//         shipping: {
//             first_name: "John",
//             last_name: "Doe",
//             address_1: "969 Market",
//             address_2: "",
//             city: "San Francisco",
//             state: "CA",
//             postcode: "94103",
//             country: "US"
//         },
//         line_items: [
//             {
//                 product_id: 93,
//                 quantity: 2
//             },
//             {
//                 product_id: 22,
//                 variation_id: 23,
//                 quantity: 1
//             }
//         ],
//         shipping_lines: [
//             {
//                 method_id: "flat_rate",
//                 method_title: "Flat Rate",
//                 total: "10.00"
//             }
//         ]
//     };

//     WooCommerce.post("/orders", data)
//         .then((response) => {
//             console.log(response.data);
//         })
//         .catch((error) => {
//             console.log(error.response.data);

//         });
//     return (
//         <>
//             test
//             {/* {products.map((pro) => (
//                 <div className='list' key={pro.id}>
//                     <Link to={`/${pro.name}`}>{pro.name}</Link>
//                     <img src={pro.image.sourceUrl} alt=''></img>
//                 </div>
//             )).slice(0, 2)} */}
//             {/* {valuesF.map((item) => (
//                 <ul key={item.id}>
//                     <li>{item.name}</li>
//                     {item.image !== null ? (
//                         <img src={item.image.sourceUrl} alt='' />
//                     ) : (
//                         <img src="https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc=" alt=""></img>
//                     )}

//                     <p>{item.description}</p>
//                     <li>{item.salePrice}</li>
//                     <li>{item.regularPrice}</li>
//                 </ul>
//             ))} */}
//             {/* <Routes>
//                 <Route to='/' />
//                 <Route path='/:name' element={<Detail />} />
//             </Routes> */}
//         </>

//     );
// }

// export default Product;