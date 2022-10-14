import React from 'react';
import productlist from './data';
import { useCart } from 'react-use-cart'

function ProductItem() {
    const { addItem } = useCart();
    const products = productlist.map(product => {
        return (
            <div className="product-item" key={product.id}>

                <div className="product-item-img">
                    <img src={product.img} alt="" style={{ width: '150px' }} />
                    <button onClick={() => addItem(product)}>ADD TO CART</button>
                </div>
                <div className="product-item-content">
                    <div className="product-item-content-tille">
                        <a href="#">{product.name}</a>
                    </div>
                    <div className="product-item-content-price">
                        <p id="text-brick">̶${product.price}.00</p>
                    </div>
                </div>
            </div>

        );
    });
    return (
        <div className="product-list">
            {products}
        </div>
    )


}

export default ProductItem;
