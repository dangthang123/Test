import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Apimenu from '../Api/apirest/Apimenu';
import BlogPage from './blog';

function Menu(props) {
    const menus = Apimenu();
    // console.log(menus);
    return (
        <div>

            <ul className='lits-menu' >
                {menus.sort((a, b) => a.id < b.id ? 1 : -1).map((item) => (
                    <li key={item.id}><Link to={item.uri}>{item.label}</Link></li>

                ))}
            </ul>


            <Routes>
                {menus.sort((a, b) => a.id < b.id ? 1 : -1).map((item) => (
                    <Route key={item.id} path={item.uri} element={<BlogPage />} />

                ))}
                <Route path='/' element={<BlogPage />} />
                {/* <Route path='/category/blogs' element={<BlogPage />} /> */}
            </Routes>
        </div>
    );
}


export default Menu;