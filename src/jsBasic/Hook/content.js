import React, { memo } from 'react';


function Content({ onCount }) {


    console.log('re-render');

    return (
        <div>
            <h1>Alo</h1>
            <button onClick={onCount} >Click</button>
        </div>
    );
}

export default memo(Content);