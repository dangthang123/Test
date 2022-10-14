// import React from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import ApiCat from '../Api/ApiAboutus';

// // import { listproduct } from '../Pro/redux/action/fetchdata';

// function Detail() {
//     const { name } = useParams();
//     // console.log(name);
//     const dispatch = useDispatch();
//     const productList = useSelector((state) => state.productlist);
//     // console.log(productList);
//     const { loading, error, products } = productList;
//     // console.log(products);
//     useEffect(() => {
//         dispatch(listproduct());
//     }, [dispatch])
//     const thisProduct = products.find(getid => getid.name === name);

//     // console.log(thisProduct);
//     // var test = '';
//     // var test1 = '';
//     // if (thisProduct) {
//     //     console.log(thisProduct.name);
//     // } else {
//     //     console.log('fail');
//     // }


//     // // console.log(slug);
//     // const dt = ApiCat();
//     // // console.log(dt);
//     // let data = [];
//     // dt.map(item => (
//     //     data = item.posts.nodes
//     // ))
//     // // console.log(data);
//     // const thisTitle = data.find((product) => String(product.slug) === slug) || {};
//     // // console.log(thisTitle);
//     // // let json = [];
//     // // if (thisTitle !== null && thisTitle.posts !== undefined) {
//     // //     // thisTitle = JSON.stringify(thisTitle.posts.nodes);

//     // //     json = thisTitle.posts.nodes;
//     // //     //console.log(json);


//     // // }





//     if (thisProduct !== undefined) {
//         return (
//             <div>
//                 <h2>{thisProduct.name}</h2>
//                 <img src={thisProduct.image.sourceUrl} alt=''></img>
//                 {/* {thisProduct.name ? thisProduct.name : <p>sdsda</p>} */}
//                 {/* <p>{thisProduct.name}</p> */}
//                 {/* <h2>{thisTitle.title}</h2>
//             <p dangerouslySetInnerHTML={{ __html: thisTitle.content }} /> */}
//             </div>
//         );
//     }

// }

// export default Detail;