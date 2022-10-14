import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Api3 from '../Api/Api3';
import ApiCat from '../Api/ApiAboutus';
import Aboutus from './Aboutus';
import AllProductFilter from './AllProductFilter';
import Detail from './Detail';
import ProductWomenList from "./ProductWomenList";
function ProductWomen() {
    const post = ApiCat();
    const postF = post;
    // console.log(postF);

    const useF = Api3();
    const valuesF = useF;
    // console.log(valuesF);

    return (
        <div style={{ marginLeft: '50px' }} className='list'>

            <Link to="/">HOME</Link>

            {valuesF.map((item) => (
                <ul key={item.id}>
                    <Link to={`/category/${item.name}`}><li>{item.name}</li></Link>
                </ul>
            ))}

            {postF.map((ite) => (
                <ul key={ite.id}>
                    <Link to={`/post/${ite.slug}`}><li>{ite.slug}</li></Link>
                </ul>
            ))}

            <Link to="/productFilter">PRODUCTS</Link>
            <Routes>
                <Route path='/category/:name' element={<ProductWomenList />} />
                <Route path='/post/:slug' element={<Aboutus />} />
                <Route path='/detail/:slug' element={<Detail />} />
                <Route path='/productFilter' element={<AllProductFilter />}></Route>
            </Routes>
        </div>
    );
}

export default ProductWomen;