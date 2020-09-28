import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCog} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

import './styles.css'

export default function NavbarNotifications(){

    return(
        <div className="navbarTop-notifications">
            <div className="navbarTop-notifications-div">
                <div className="navbar-notification-title">
                    Notifications
                </div>
                <div className="navabar-notificatons-icon">
                    <FontAwesomeIcon icon={faCog} />
                </div>
            </div>
            <div className="navbar-notifications-links">
                <Link to='/notifications' className="notifications-all">
                    <div className="navbar-notifications-links-tudo">
                        All
                    </div>
                </Link>
                <Link to="/notifications/mentions" className="notifications-men">
                    <div className="navbar-notifications-links-menc">
                        Mentions
                    </div>
                </Link>
            </div>
        </div>
    )
}