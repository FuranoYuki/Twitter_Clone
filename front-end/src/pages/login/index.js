import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'


import "./styles.css"

function LogIn(){

    useEffect(() => {
        document.title = "Twitter - login"
    }, [])
    
    return(
        <div className="login">
            <div className="login-content">
                <FontAwesomeIcon icon={faTwitter} />
                <div className="login-header">
                    Log in to Twitter
                </div>
                <form className="login-form">
                    <label className="login-form-user content" for="login-form-user">
                        <span>Phone,email, or username</span>
                        <input type="text" id="login-form-user" name="user"/>
                    </label>


                    <label className="login-form-password content" for="login-form-password">
                        <span>Password</span>
                        <input type="text" id="login-form-password" name="password" />
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