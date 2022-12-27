import React from 'react';

function Filter({ datal, dataF, filterItem, menuItems, setItem }) {

    return (
        <div>

            <div className='filter'>
                FILTER{""}
                {menuItems.map((vla, id) => {
                    return (
                        <li
                            className="item"
                            key={id}
                            onClick={() => filterItem(vla)}
                        >
                            {vla}
                        </li>
                    );
                })}
                <li onClick={() => filterItem(datal)}>aLL</li>

            </div>
        </div>
    );
}

export default Filter;