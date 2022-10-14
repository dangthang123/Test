import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from './counterSlice';
CounterFeature.propTypes = {

};

function CounterFeature(props) {
    const dispath = useDispatch();
    const count = useSelector(state => state.count);

    const handleIncreaseClick = () => {
        const action = increase("hello world +");
        console.log(action);
        dispath(action);
    }
    const handleDecreaseClick = () => {
        const action = decrease("hello world -");
        console.log(action);
        dispath(action);
    }
    return (
        <div>
            CounterFeature: {count}
            <div>
                <button onClick={handleIncreaseClick}>increase</button>
                <button onClick={handleDecreaseClick}>decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;