import React from 'react';
import PropTypes from 'prop-types';



function Input({ label, ...inputprops }) {
    return (
        <div>
            <label>{label}</label>
            <input {...inputprops} />
        </div>
    );
}
export default Input;