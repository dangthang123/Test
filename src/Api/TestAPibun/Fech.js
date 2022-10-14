import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Fech(props) {
    const [value, setValue] = useState([])

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b23dfae9a4c64555a80b6061bdb24b03', {})
            .then(data => setValue(data.data.articles
            ))
        // props.dispatchSlider();
    }, []);
    console.log(value);
    return (
        <div>

        </div>
    );
}

export default Fech;