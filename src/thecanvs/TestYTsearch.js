import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import YTSearch from "youtube-api-search";
function TestYTsearch() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyCppdqprCrC2hyXSC7D8_SOjIOoswCTCo0',

            }
        })
            .then((res) => {
                setPosts(res.data.items)
            })
    }, [posts])
    return (
        <div className='search-bar'>
            <input className='form-search' placeholder='Search' />
        </div>
    );
}

export default TestYTsearch;