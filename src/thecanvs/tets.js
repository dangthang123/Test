import React from 'react';
import PropTypes from 'prop-types';

import Snowfall from 'react-snowfall'

function Tets(props) {
    return (
        <div style={{ height: 1440, width: 2440, background: '#282c34', position: 'relative' }}>
            <Snowfall
                color="red"
                style={{ background: '#fff' }}
                snowflakeCount={1000}
            />
        </div>
    );
}

export default Tets;