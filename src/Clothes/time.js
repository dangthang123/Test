import React from 'react';
import Countdown from 'react-countdown';


function Time() {
    return (
        <div>
            Test
            <Countdown
                date={Date.now() + 25000000}
            />
        </div>
    );
}

export default Time;