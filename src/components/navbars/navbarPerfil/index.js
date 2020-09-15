import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import './styles.css'

export default function NavbarPerfil(){

    return(
        <div className="navbar-perfil">
            <div className="navbar-perfil-div">
                <FontAwesomeIcon icon={faArrowLeft}/>
            </div>
            <div className="navbar-perfil-social">
                <div className="navbar-perfil-nick">
                    Furano
                </div>
                <div className="navabr-perfil-tweets">
                    <span className="perfil-tweets-vlaue">20</span> Tweet
                </div>
            </div>
        </div>
    )
}