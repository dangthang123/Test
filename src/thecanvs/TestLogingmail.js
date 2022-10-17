import React from 'react';
import GoogleLogin from 'react-google-login';


function TestLogingmail(props) {
    const clientId = '371587319454-uvpmdvqtmqk228o4fm1430d8giomm9md.apps.googleusercontent.com'
    const handleFailure = (result) => {
        alert(result);
    };
    const handleLogin = (googledata) => {
        console.log(googledata);
    };

    return (
        <div>
            <h1>Login Goggle</h1>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default TestLogingmail;