import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import Content from './content';
import ContentContext from './contentContext';
import UseMemo from './useMemo';
import '../../App.css';
import { ThemeContext } from './ThemContext'
const tabs = ['posts', 'comments', 'albums']
function Hook() {
    // const [number, setNumber] = useState(1)
    // const handleClick = () => {
    //     setNumber(number + 1)
    // }
    // const handleClicks = () => {
    //     setNumber(number * 2)
    // }


    // ______________________________________

    // const [title, setTitle] = useState('');
    // const [post, setPost] = useState([]);
    // const [type, setType] = useState('posts');
    // // Top
    // const [top, setTop] = useState(false);

    // // Resize
    // const [width, setWidth] = useState(window.innerWidth)


    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setPost(data);
    //         })
    // }, [type])

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 150) {
    //             // show scroll
    //             setTop(true)
    //         }
    //         else {
    //             // Hide
    //             setTop(false)
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     return () => {

    //         window.removeEventListener('scroll', handleScroll)
    //     }

    // }, [])


    // useEffect(() => {
    //     const handleResize = () => {
    //         setWidth(window.innerWidth)
    //     }
    //     window.addEventListener('resize', handleResize)
    // }, [])


    // _____________________________________
    // const [countdown, setCoundown] = useState(180)
    // useEffect(() => {
    //     const timerId = setInterval(() => {
    //         setCoundown(a => a + 1)
    //         console.log('abc');
    //     }, 1000)
    //     // ClearUp Function
    //     return () =>
    //         clearInterval(timerId)
    // }, [])


    // ______________________________

    // const [count, setCount] = useState(0);
    // useLayoutEffect(() => {
    //     if (count > 3) {
    //         setCount(0)
    //     }
    // }, [count])
    // const handleCount = () => {
    //     setCount(count + 1)
    // }

    // ______________________________

    // const [count, setCount] = useState(0);
    // const handleCount = useCallback(() => {
    //     setCount(a => a + 1)
    // }, [])

    // ______________________________

    const theme = useContext(ThemeContext);
    // console.log(theme);


    return (
        <div>
            {/* <button onClick={handleClick}>+</button>
            <h1>{number}</h1>
            <button onClick={handleClicks}>-</button> */}

            {/* ______________________________ */}
            {/* {
                top && (
                    <button
                        style={
                            {
                                position: 'fixed',
                                right: '20px',
                                bottom: '20px'


                            }
                        }
                    >
                        Top
                    </button>
                )
            }
            {
                tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setType(tab)}
                        style={type === tab ? { color: 'red', backgroundColor: 'black' } : {}}
                    >
                        {tab}
                    </button>
                ))
            }
            <button>{width}</button>
            <ul>
                {
                    post.map(post => (
                        <li key={post.id}>
                            {post.title || post.name}
                        </li>
                    ))
                }
            </ul> */}

            {/* ______________________________ */}
            {/* <h1>{countdown}</h1> */}

            {/* ______________________________ */}
            {/* <h1>{count}</h1>
            <button onClick={handleCount}>Click</button> */}


            {/* ______________________________ */}
            {/* <h1>{count}</h1>

            <Content
                onCount={handleCount}
            /> */}
            {/* <UseMemo /> */}

            {/* ______________________________ */}

            <button onClick={theme.handleTheme}>Click</button>
            <ContentContext />
        </div>
    );
}

export default Hook;