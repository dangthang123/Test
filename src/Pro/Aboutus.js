import React from 'react';
import { useParams } from 'react-router-dom';
import ApiCat from '../Api/ApiAboutus';
import moment from 'moment';
import { Link } from 'react-router-dom'
import './ProductApi.css';
function Aboutus() {
    const { slug } = useParams();
    // console.log(slug);
    const dt = ApiCat();
    let title = dt;

    const thisTitle = title.find((product) => String(product.slug) === slug) || {};
    // console.log(thisTitle);
    let jsonProduct = [];

    if (thisTitle !== null && thisTitle.posts !== undefined) {
        // jsonProduct = JSON.stringify(thisProduct.products.nodes);
        jsonProduct = thisTitle.posts.nodes;
    }
    // console.log(jsonProduct);
    return (
        <div className='list-about'>
            {jsonProduct.map((item) => (
                <div key={item.id} className='item'>
                    <Link to={`/detail/${item.slug}`} className='onClick'><p><i className="fa-solid fa-arrow-right-long"></i>Click to see details</p></Link>
                    <h1>{item.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                    <p className='date'>{moment(item.date).format("MMMM ")}</p>
                    <p className='date'>{moment(item.date).format("D ")}</p>
                    {/* <img src={item.featuredImage.node.sourceUrl} alt=""></img> */}

                </div>

            )).slice(0, 2)}

        </div>
    );
}

export default Aboutus;