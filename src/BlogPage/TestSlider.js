import React from 'react';
import PropTypes from 'prop-types';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


function TestSlider(props) {
    return (
        <AnimationOnScroll initiallyVisible={true} delay={1000} animateIn="animate__wobble">
            <h2>Look what i am doing</h2>
        </AnimationOnScroll>
    );
}

export default TestSlider;