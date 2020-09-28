import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

import './styles.css';

function PasswordReset(){

    return(
        <div className="password-reset">
            <div className="password-reset-nav">
                <FontAwesomeIcon icon={faTwitter} />
                <span>Password Reset</span>
            </div>
            <div className="password-reset-content">
                <div className="password-reset-header">
                    Find your Twitter account 
                </div>
                <div className="password-reset-text">
                    Enter your email, phone number, or username.
                </div>
                <form>
                    <div className="password-reset-input">
                        <input type="text" />
                    </div>
                    <button type="submit" className="password-reset-search">
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PasswordReset;