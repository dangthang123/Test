import React from 'react';

function Filter({ dataF, filterItem, menuItems, setItem }) {

    return (
        <div>

            <div className='filter'>
                FILTER{""}
                {menuItems.map((vla, id) => {
                    return (
                        <button
                            className="item"
                            key={id}
                            onClick={() => filterItem(vla)}
                        >
                            {vla}
                        </button>
                    );
                })}

            </div>
        </div>
    );
}

export default Filter;