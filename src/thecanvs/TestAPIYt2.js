import React, { useEffect, useState } from 'react';
import Iframe from 'react-iframe'

function TestAPIYt2(props) {
    const [data, setdata] = useState([])
    // console.log(data);

    useEffect(() => {
        fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=PLP6mKLBWAJWKuxWXeC1RRp5nH69JFwKTI&key=AIzaSyCppdqprCrC2hyXSC7D8_SOjIOoswCTCo0')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const result = data.items.map(item => {
                    return { title: item.snippet.title, video: item.contentDetails.videoId }
                })
                // console.log(result);
                setdata(result)

            })
    })
    const renderVideo = () => {
        return (
            <>
                {data.map((item, i) => (
                    <div key={i}>
                        <h1>{item.title}</h1>
                        <Iframe url={`https://www.youtube.com/embed/${item.video}`}
                            width="640px"
                            height="320px"
                            id=""
                            className=""
                            display="block"
                            position="relative" />
                    </div>
                ))}
            </>
        )
    }


    return (
        <div>
            {renderVideo()}
        </div>
    );
}

export default TestAPIYt2;