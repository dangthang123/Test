import { Rating } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Api3 from '../Api/Api3';


function ProductWomenList() {
    const { name } = useParams();
    const dt = Api3();
    let product = dt;

    const thisProduct = product.find((product) => String(product.name) === name) || {};
    let jsonProduct = [];

    if (thisProduct !== null && thisProduct.products !== undefined) {
        // jsonProduct = JSON.stringify(thisProduct.products.nodes);
        jsonProduct = thisProduct.products.nodes;
    }

    // console.log(jprice);
    // console.log(jsonProduct);

    // const [price, setPrice] = useState(0);
    // const handleInput = (e) => {
    //     setPrice(e.target.value);
    // };
    return (
        <div>
            {/* <input type="range" onInput={handleInput}></input> */}
            {/* <h1>{price}</h1> */}
            {jsonProduct.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    {item.image !== null ? (
                        <img src={item.image.sourceUrl} alt=""></img>
                    ) : (
                        <img src='https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc=' alt=""></img>
                    )}

                    <p>{item.description}</p>
                    {item.onSale === true ? (
                        <div>
                            <p style={{ textDecorationLine: 'line-through', color: 'red' }}>${item.regularPrice}</p>
                            <p>${item.salePrice}</p>

                        </div>

                    ) : (
                        <p className='b'>${item.regularPrice}</p>
                    )}
                    {item.featured === true ? (
                        <Rating defaultValue={item.reviews.averageRating} precision={1} readOnly size='small' />

                    ) : (
                        <Rating defaultValue={1} precision={1} readOnly size='small' />

                    )}
                    {/* <button>ADD TO CART</button> */}
                </div>

            ))}

        </div>
    );
}

export default ProductWomenList;