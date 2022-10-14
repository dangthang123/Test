import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};
function getRandomColor() {
    const COLOR_LIS = ['black', 'white', 'orange', 'yellow', 'green'];
    const randomindex = Math.trunc(Math.random() * 5);
    return COLOR_LIS[randomindex];
}
function ColorBox() {
    const [color, setColor] = useState('deeppink');
    function handlBox() {
        const newColor = getRandomColor();
        setColor(newColor);
    }
    return (
        <div className="ColorBox" style={{ backgroundColor: color }}
            onClick={handlBox}
        >
            BACNAC
        </div>
    );
}

export default ColorBox;