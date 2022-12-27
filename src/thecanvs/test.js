import React, { useEffect, useState } from 'react';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

function Test() {
    const [profile, setProfile] = useState([]);
    console.log(profile);
    const clientId = '254112384835-0fta0hc4799oq0ni02e8vp9gk8o3j6co.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
    };

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {/* {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : ( */}
            {profile === null ? (
                <>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />

                </>

            ) : (
                <p>abc</p>
            )}

            {/* )} */}
        </div>
    );
}

export default Test;
