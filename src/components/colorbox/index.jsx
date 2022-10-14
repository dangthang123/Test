import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState('white');
  return (
    <div>
      {color}
      <button onClick={() => setColor('black')}>Black</button>
      <button onClick={() => setColor('white')}>White</button>
    </div>
  );
}

export default ColorBox;
