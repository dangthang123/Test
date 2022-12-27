import React, { useEffect, useRef, useState } from 'react';


function Scroll() {

    const [top, setTop] = useState('');


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollX >= 120) {
                setTop('scroll-header')
            }
            else {
                setTop('')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {

            window.removeEventListener('scroll', handleScroll)
        }

    }, [])
    console.log(top);
    return (
        <div className='main'>
            <img src='https://onextdigital.com/wp-content/uploads/2022/07/headless.png' alt=''></img>
            <img src='https://onextdigital.com/wp-content/uploads/2022/07/wordpress.png' alt=''></img>
            <img src='https://onextdigital.com/wp-content/uploads/2022/07/shopify.png' alt=''></img>
            <img src='https://onextdigital.com/wp-content/uploads/2022/07/headless.png' alt=''></img>
            <img src='https://onextdigital.com/wp-content/uploads/2022/07/wordpress.png' alt=''></img>
            <img src='https://onextdigital.com/wp-content/uploads/2022/07/shopify.png' alt=''></img>


        </div>
    );
}

export default Scroll;