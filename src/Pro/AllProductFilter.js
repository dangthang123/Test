import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApiFilter from '../Api/ApiFilter1';
import Filter from './Filter';



function AllProductFilter() {
    const use = ApiFilter();
    const dataF = use;

    // const dataS = dataF.length;

    // let data = [];
    // use.map(item => (
    //     data = item.products.nodes
    // ))
    // console.log(data);
    const [item, setItem] = useState(dataF);
    const menuItems = [...new Set(dataF.map((val) => val.name))];
    // console.log(menuItems);
    const filterItem = (curcat) => {
        const newItem = dataF.filter((newval) => {
            return newval.name === curcat;
        });
        // console.log(newItem);
        setItem(newItem);
    }
    let data = [];
    item.map((item) => (
        data = item.products.nodes
    ))

    // console.log(data);


    return (
        <div>
            <h1 style={{ color: 'red' }}>AllProductFilter</h1>

            <Filter
                dataF={dataF}
                filterItem={filterItem}
                menuItems={menuItems}
                setItem={setItem}
            />
            {data.map((pro) => (
                <div className='list' key={pro.id}>
                    {pro.image !== null ? (
                        <img src={pro.image.sourceUrl} alt='' style={{ width: '20%' }}></img>
                    ) : (
                        <img src='https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc=' alt=""></img>

                    )}

                    <h2>{pro.name}</h2>
                    {/* <p>{pro.description}</p> */}
                </div>
            ))}
            {item.length === 0 && <div className='no-item' style={{ fontSize: '50px' }}>No Item</div>}

        </div>
    );
}

export default AllProductFilter;