import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faSearch, faBell, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

import './styles.css'

export default function FooterBar(){
    

    return(
        <div className="footer-bar">
            <div className="footer-home icons">
                <Link to="/home">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
            </div>
            <div className="footer-search icons">
                <FontAwesomeIcon icon={faSearch}/>
            </div>
            <div className="footer-notifications icons">
                <Link to="/notifications">
                    <FontAwesomeIcon icon={faBell} />
                </Link>
            </div>
            <div className="footer-messages icons">
                <Link to="/messages">
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </div>
        </div>
    )
}