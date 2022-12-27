import React from 'react';
import ReactImageZoom from 'react-image-zoom';
import img from '../img/Rectangle 6.png';
const props = { width: 400, height: 300, zoomWidth: 400, img: img, zoomPosition: 'original' };

function TestZoom() {
    return (
        <div>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <ReactImageZoom {...props} />
        </div>
    );
}

export default TestZoom;