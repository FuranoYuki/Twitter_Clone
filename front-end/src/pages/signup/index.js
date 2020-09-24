import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

import "./styles.css";

function SignUp(){

    useEffect(() => {
        document.title = "Twitter - Sign up"
    }, []);

    const months = ['january', 'february', 'march', 'april', 'May',
                    'juny', 'july', 'august', 'september', 'october',
                    'november', 'december'];

    const days =[   1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                    11, 12, 13, 14, 15, 16, 17, 18,
                    19, 20, 21, 22, 23, 24, 25, 26,
                    27, 28, 29, 30, 31
                ]

    const years=[
                    '1990', '1995', '1999', '2000', '2001'
                ]

    return(
        
        <div className="signup">
            <form className="signup-form">
                <button type="submit" className="signup-form-button-sub">
                    Next
                </button>
                <div className="signup-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="signup-form-header">
                    Create your account
                </div>
                <label className="signup-form-name content" for="signup-form-name">
                    <span>Name</span>
                    <input type="text" id="signup-form-name" name="name" />
                </label>
                <label className="signup-form-password content" for="signup-form-password">
                    <span>password</span>
                    <input type="text" id="signup-form-password" name="password" />
                </label>
                <div className="signup-form-date">
                    <span>Date of birth</span>
                    <p>
                        This will not be shown publicly. Confirm your 
                        own age, even if this account is for a business, 
                        a pet, or something else.
                    </p>
                    <div className="signup-form-select-group">
                        <select name="month" className="signup-form-selects">
                            <span>month</span>
                            {months.map((month, index) => 
                                <option className="signup-form-select-option" key={index} value={month}>{month}</option>
                            )}
                        </select>
                        <select name="day" className="signup-form-selects">
                            <span>day</span>
                            {days.map((day, index) => 
                                <option className="signup-form-select-option" key={index} value={day}>{day}</option>
                            )}
                        </select>
                        <select name="year" className="signup-form-selects">
                            <span>year</span>
                            {years.map((year, index) => 
                                <option className="signup-form-select-option" key={index} value={year}>{year}</option>
                            )}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;