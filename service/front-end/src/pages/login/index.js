import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import api from '../../services/api';
import {login, isAuthenticated} from '../../services/auth';

import "./styles.css"

function LogIn(){

    useEffect(() => {
        document.title = "Twitter - login"
    }, []);

    async function loginForm(event){
        event.preventDefault();
        const email = document.getElementById("login-form-user").value;
        const password = document.getElementById("login-form-password").value;
        
        try {
            const axios = await api.post("/login", {
                email,
                password
            });

            login(axios.data.token)
            isAuthenticated();

            return  window.location.replace("/furano/home")

        } catch (error) {
            console.log(error.response.data);
        }
    }
    
    return(
        <div className="login">
            <div className="login-content">
                <FontAwesomeIcon icon={faTwitter} />
                <div className="login-header">
                    Log in to Twitter
                </div>
                <form onSubmit={loginForm} className="login-form">
                    <label className="login-form-user content" for="login-form-user">
                        <span>Phone,email, or username</span>
                        <input type="email" id="login-form-user" name="email"/>
                    </label>


                    <label className="login-form-password content" for="login-form-password">
                        <span>Password</span>
                        <input type="password" id="login-form-password" name="password" />
                    </label>
                    
                    <button type="submit" className="login-form-button">
                        Log in
                    </button>
                </form>
                <div className="login-options">
                    <a href="/account/begin_password_reset" className="login-options-topic">
                        Forgot password?
                    </a>
                    <span>·</span>
                    <a className="login-options-topic"  >
                        Sign up for twitter
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LogIn