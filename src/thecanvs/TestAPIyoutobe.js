import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


function TestAPIyoutobe() {
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=PLUdA0JOlGbR9iC1JcirU4T64aADf6ezrf&key=AIzaSyCppdqprCrC2hyXSC7D8_SOjIOoswCTCo0')
            .then(data => {
                console.log(data);
                setdata(data.data.items)
                // const result = data.map(item => {
                //     console.log(item.data.items.)
                // })
            })
    }, [])
    // console.log(data);
    // let dataB = '';
    // data.map(item => {
    //     // console.log(item.snippet.title, item.snippet.resourceId.videoId)
    //     // return { title: item.snippet.title, video: item.snippet.resourceId.videoId }
    //     dataB = item.snippet.resourceId.videoId

    // })


    // const [launches, setLaunches] = useState([]);
    // const [vid, setvid] = useState("")
    // const [title, settitle] = useState("")
    // useEffect(() => {
    //     setLaunches(result.video)
    //     // setvid(result.video)
    //     // settitle(result.title)
    // }, [])


    // const [counter, setcounter] = useState(0)

    // const renderVideo = () => {
    //     <>
    //         <h1>{title}</h1>
    //         <div className='video'>
    //             {/* <iframe width='853' height='480' src={'//www.youtube.com/embed/' + vid + '?rel=0'}></iframe> */}
    //         </div>
    //     </>
    // }

    return (
        <div>
            {data.map((ite, i) => (
                <div key={i}>
                    <h2>{ite.snippet.title}</h2>
                    <p>{ite.snippet.publishedAt}</p>
                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${ite.contentDetails.videoId}`} />
                </div>
            ))}


            {/* {result.map((ite, index) => (
               <p key={index}>{ite.videoId}</p> 

            ))} */}
            {/* {renderVideo()}
            <ul>
                {launches.map((ite, index) => (
                    <li key={index}>
                        {ite.title}
                    </li>
                ))}
            </ul> */}

        </div>
    );
}

export default TestAPIyoutobe;