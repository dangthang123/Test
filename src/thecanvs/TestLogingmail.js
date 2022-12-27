import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


function TestLogingmail() {
    // const clientId = '254112384835-oqlvnil78dagqdg9mv19o61ofuvmvcjj.apps.googleusercontent.com'
    // const [loginData, setLoginData] = useState(
    //     localStorage.getItem('loginData')
    //         ? JSON.parse(localStorage.getItem('loginData'))
    //         : null
    // );
    // console.log(loginData);
    // const handleFailure = (result) => {
    //     // alert(result);
    // };
    // const handleLogin = (googledata) => {
    //     console.log(googledata);
    // };


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    console.log(name);
    console.log(email);
    const responseGoogle = response => {
        console.log(response);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
        setLoginStatus(true);
    };
    const logout = () => {
        console.log("logout");
        setLoginStatus(false);
    };

    return (
        <div>
            <h1>Login Goggle</h1>
            {/* <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            /> */}

            {!loginStatus && (
                <GoogleLogin
                    clientId="254112384835-v0mr5f4q1ohjehbraqtrv3k526ue89me.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                />
            )}
            {/* {loginStatus && (
                <div>
                    <h2>Welcome {name}</h2>
                    <h2>Email: {email}</h2>
                    <img src={url} alt={name} />
                    <br />
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    />
                </div>
            )} */}
        </div>
    );
}

export default TestLogingmail;

// 254112384835-eiqu9fogaq7kfh8bvp8avg5aanoqthaq.apps.googleusercontent.com