import React, { useState } from 'react';
// import Zoom from 'react-img-zoom'
import data from './data';
import './style.css';
const allCategories = [...new Set(data.map((p) => p.category))];
function ProductClothes() {

    const [show, setShow] = useState(null);
    const handleItemClickShow = (event) => {
        if (show == 'show-row') {
            setShow('show-row');
        } else {
            setShow('show-row');
            event.stopPropagation();
        }
    };
    const [showC, setShowC] = useState(null);
    const handleItemClickShowC = (event) => {
        if (show == 'show-column') {
            setShow('show-column');
        } else {
            setShow('show-column');
            event.stopPropagation();
        }
    };


    // console.log(data);
    const [menuItems, setMenuItems] = useState(data);
    // console.log(menuItems);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === "all") {
            return setMenuItems(data);
        }
        const newItems = data.filter((item) => item.category === category);
        console.log(newItems);
        setMenuItems(newItems);
    };


    const [price, setPrice] = useState(0);
    const handleInput = (e) => {
        setPrice(e.target.value);
    };

    let colorT = '';
    data.map((ite, i) => (
        colorT = ite.color
    ))

    return (
        <div className='shop-product mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='product-category-shop'>
                            <div className='category-list'>
                                {/* ++=filter category.++ */}
                                <div className='filter-category'>
                                    <h4>Product Categories</h4>
                                    <div className='filter-category-checkout-list'>
                                        <ul>
                                            {categories.map((item, i) => (
                                                <li key={i}>
                                                    <label htmlFor="vehicle1">
                                                        <input type="checkbox" id="men" name="men" value={item} onInput={() => filterItems(item)}></input>
                                                        {item}</label>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>

                                {/* +++filterPrice++ */}
                                <div className='filter-price'>
                                    <h4>Filter by price</h4>
                                    <div className='price-label'>
                                        <h3 className='price-number'>Price: $0 - ${price}</h3>
                                        <input type="range" onInput={handleInput} />
                                    </div>
                                </div>

                                {/* +++filterColor+++ */}

                                <div className='filter-color'>
                                    <h4>Filter by color</h4>
                                    {colorT.map((ite, i) => (
                                        <button key={i} style={{ backgroundColor: ite }}><span>{ite}</span></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={` col-lg-9`}>
                        {/* +++Banner++ */}
                        <div className='banner-shop-product position-relative'>
                            <div className='img-banner w-100'>
                                {/* <Zoom
                                    img="https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-26.jpg"
                                    zoomScale={3}
                                    width={1200}
                                    height={400}
                                /> */}
                                <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-26.jpg' alt=''></img>
                            </div>
                            <div className='banner-title '>
                                <h2>Plus-Size Styles for Every Season</h2>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                            </div>
                        </div>

                        {/* +++before-shop-loop++ */}
                        <div className='before-shop-loop d-flex justify-content-between'>
                            <div className='before-shop-loop-left d-flex'>
                                <div className='product-button-views d-flex'>
                                    <i onClick={(event) => handleItemClickShow(event)} className="fa-solid fa-table "></i>
                                    <i onClick={(event) => handleItemClickShowC(event)} className="fa-solid fa-list-ul"></i>
                                </div>

                                <p className='title-result-count'>
                                    Showing 1–16 of 72 results
                                </p>
                            </div>

                            <div className='before-shop-loop-right d-flex'>
                                <div className='per-page-products'>
                                    <form className="product-filter" method="get">
                                        <select name="perpage" className="perpage orderby filterSelect select2-hidden-accessible" data-class="select-filter-perpage">
                                            <option value="16" selected="&quot;selected&quot;">16 Items</option>
                                            <option value="32">32 Items</option>
                                            <option value="48">48 Items</option>
                                            <option value="64">64 Items</option>
                                        </select>
                                    </form>
                                </div>

                                <div className='sorting-products'>
                                    <form className="ordering" method="get">
                                        <select name="perpage" className="perpage orderby filterSelect select2-hidden-accessible" data-class="select-filter-perpage">
                                            <option value="popularity" selected="&quot;selected&quot;">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by latest</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: low to low</option>
                                        </select>
                                    </form>
                                </div>
                            </div>

                        </div>

                        {/* +++Product-list++ */}
                        <div className={`list-product`}>
                            <div className={`${show} ${showC} row col-mb-50`}>
                                {menuItems
                                    .filter((hotel) => {

                                        {/* return hotel.regularPrice > parseInt(price, 10); */ }

                                        if (hotel.salePrice != null) {
                                            return hotel.salePrice > parseInt(price, 10);
                                        } else {
                                            return hotel.regularPrice > parseInt(price, 10);
                                        }
                                    })
                                    .map((hotel) => {
                                        return (
                                            <div className='col-md-3' key={hotel.id}>
                                                <div className={`${show} ${showC} product-item`}>

                                                    <div className='product-img-sale position-relative'>
                                                        {/* <HoverSlideshow images={hotel.image} width="400px" height="300px" /> */}
                                                        <img className='product-img w-100' src={hotel.image} alt=''></img>
                                                        <span className='product-sale'>24%</span>
                                                    </div>
                                                    <div className={`${show} ${showC} product-content`}>
                                                        <div className='product-reviews'>
                                                            <i className="fa-solid fa-star"></i>
                                                            <p>{hotel.review} reviews</p>
                                                        </div>
                                                        <div className='product-title'>
                                                            <h3>{hotel.name}</h3>
                                                        </div>
                                                        {hotel.salePrice != null ? (
                                                            <div className='product-price-sale'>
                                                                <p className='regular-price'>${hotel.regularPrice}0</p>
                                                                <p className='sale-price'>${hotel.salePrice}0</p>
                                                            </div>
                                                        ) : (
                                                            <div className='product-price'>
                                                                <p className='regular-price'>${hotel.regularPrice}0</p>
                                                            </div>
                                                        )}
                                                        <p className='content-description'>{hotel.title}</p>
                                                        <hr />
                                                        <div className={`${showC} btn-sku-cate-tag`}>
                                                            <button className='btn-select'>Select options</button>
                                                            <ul className='content-sku'>
                                                                <li>SKU: <span>BE45VGRT</span></li>
                                                                <li>Categories: <span>BE45VGRT</span></li>
                                                                <li>Tags:<span>BE45VGRT</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductClothes;