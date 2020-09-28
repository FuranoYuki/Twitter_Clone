import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faSearch, faUserFriends, faComment} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

import "./styles.css";

export default function LogOut(){

    return(
        <div className="logout">
            <div className="logout-content">
                <div className="logout-black">
                    <div className="logout-black-content">
                        <div className="logout-black-icon">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="logout-black-header">
                            See what’s happening in the world right now
                        </div>
                        <div className="logout-black-mess">
                            Join Twitter today.
                        </div>
                        <div className="logout-black-buttons">
                            <Link to="/signup" className="logout-black-buttons-signup">
                                Sign up
                            </Link>
                            <Link to="/login" className="logout-black-buttons-login">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="logout-blue">
                    <div className="logout-blue-content">
                        <div className="logout-blue-content-topic">
                            <FontAwesomeIcon icon={faSearch} />
                            <span>Follow your interest</span>
                        </div>
                        <div className="logout-blue-content-topic">
                            <FontAwesomeIcon icon={faUserFriends} />
                            <span>Hear what people are talking about.</span>
                        </div>
                        <div className="logout-blue-content-topic">
                            <FontAwesomeIcon icon={faComment} />
                            <span>Join the conversation.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logout-footer">
                <div className="logout-footer-buttons">
                    <Link to="signup" className="footer-buttons-signup">
                        Sign up
                    </Link>
                    <Link to="/login" className="footer-buttons-login">
                        Log in
                    </Link>
                </div>
                <div className="logout-footer-topic">
                    About
                </div>
                <div className="logout-footer-topic">
                    Help Center
                </div>
                <div className="logout-footer-topic">
                    Terms
                </div>
                <div className="logout-footer-topic">
                    Privacy policy
                </div>
                <div className="logout-footer-topic">
                    Cokies
                </div>
                <div className="logout-footer-topic">
                    Ads info
                </div>
                <div className="logout-footer-topic">
                    Blog
                </div>
                <div className="logout-footer-topic">
                    Status
                </div>
                <div className="logout-footer-topic">
                    Jobs
                </div>
                <div className="logout-footer-topic">
                    Brand
                </div>
                <div className="logout-footer-topic">
                    Advertise
                </div>
                <div className="logout-footer-topic">
                    Marketing
                </div>
                <div className="logout-footer-topic">
                    Buseniesses
                </div>
                <div className="logout-footer-topic">
                    Developers
                </div>
                <div className="logout-footer-topic">
                    Dictionary
                </div>
                <div className="logout-footer-topic">
                    Settigns
                </div>
                <div className="logout-footer-topic">
                    © 2020 Twitter, Inc.
                </div>
            </div>
        </div>
    )
}