import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

import './styles.css'
import ImagePerfil from  '../../../img/menu-image.jpg'

export default function NavbarMessages(){

    return(
        <div className="navbar-messages">
            <div className="navbar-messages-titles">
                <div className="navbar-messages-icon">
                    <img className="navbar-messages-img" src={ImagePerfil} />
                    <div className="navbar-messages-title">Messages</div>
                </div>
                <div className="navbar-messages-newMessa">
                    <Link>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                </div>
            </div>
            <div className="navbar-messages-search">
                <input className="messages-search-input" type="search" placeholder="search for people and groups" />
            </div>
        </div>
    )
}