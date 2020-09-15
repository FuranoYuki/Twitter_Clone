import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import menuImg  from '../../../img/menu-image.jpg'

function NavbarHome(){
    const dispatch = useDispatch()


    function dispatchHandle(type){
        return {type}
    }
    
    return(
        <div className="navbar-home">
            <div className="navbar-home-user">
                <div className="navbar-home-icon" onClick={() => dispatch(dispatchHandle('show-menu'))}>
                    <img className="navbar-icon" src={menuImg} alt="perfil icon image"/>
                </div>
                <div className="navbar-title">Pagina Inicial</div>
            </div>
            <div className="navabr-config">
                <FontAwesomeIcon icon={faStar} />
            </div>
        </div>
    )
}

export default NavbarHome