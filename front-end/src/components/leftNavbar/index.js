import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faHome,
    faHashtag,
    faBell,
    faEnvelope,
    faBookmark,
    faClipboardList,
    faUser,
    faEllipsisH,
    faFeatherAlt
} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'

import './styles.css'

export default function LeftNavbar(){

    return(
        <div className="left-navbar">
            <div className="navbar-ul">
                <div className="nav-li">
                    <div className="li-twitter icon">
                        <Link to='/home'>
                            <FontAwesomeIcon icon={faTwitter} />
                            <div className="twitter-text"></div>
                        </Link>
                    </div>
                </div>
                <div className="nav-li">
                    <div className="li-home icon">
                        <Link to="/home">
                            <FontAwesomeIcon icon={faHome} />
                            <div className="home-text"></div>
                        </Link>
                    </div>
                </div>
                <div className="nav-li">
                    <div className="li-hashtag icon">
                        <FontAwesomeIcon icon={faHashtag} />
                    </div>
                    <div className="hashtag-text"></div>
                </div>
                <div className="nav-li">
                    <Link to="/notifications">
                        <div className="li-bell icon">
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                        <div className="bell-text"></div>
                    </Link>
                </div>
                <div className="nav-li">
                    <div className="li-messages icon">
                        <Link to="/messages">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <div className="messages-text"></div>
                        </Link>
                    </div>
                </div>
                <div className="nav-li">
                    <div className="li-bookmarks icon">
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <div className="bookmarks-text"></div>
                </div>
                <div className="nav-li">
                    <div className="li-list icon">
                        <FontAwesomeIcon icon={faClipboardList} />
                    </div>
                    <div className="list-text"></div>
                </div>
                <div className="nav-li">
                    <div className="li-user icon">
                        <Link to='/perfil'>
                            <FontAwesomeIcon icon={faUser} />
                            <div className="user-text"></div>
                        </Link>
                    </div>
                </div>
                <div className="nav-li">
                    <div className="li-menu icon">
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                    <div className="menu-text"></div>
                </div>
                <div className="nav-li">
                    <div className="li-feather icon">
                        <FontAwesomeIcon icon={faFeatherAlt} />
                    </div>
                    <div className="feather-text"></div>
                </div>
            </div>
        </div>
    )
}