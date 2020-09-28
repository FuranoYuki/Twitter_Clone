import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTimes, 
    faPlus,
    faUser,
    faClipboardList,
    faCommentDots,
    faBookmark,
    faBolt,
    faChartLine,
    faChartBar,
    faCog,
    faQuestionCircle,
    faChartPie,
    faPaintBrush
} from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import img from '../../img/menu-image.jpg'
import { Link } from 'react-router-dom'

export default function Hidebar(){

    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()

    function dispatchHandler(type){
        return {type}
    }

    if(menu){
        return(
            <>
                <div className="hidebar">
                    <div className="hidebar-top">
                        <div className="hidebar-title" >Informações da conta</div>
                        <div className="hidebar-close" onClick={() => {dispatch(dispatchHandler('show-menu'))}}>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    <ul className="hidebar-list">
                        <li className="hidebar-li">
                            <div className="hidebar-first">
                                <div className="hidebar-icon">
                                    <Link to="/perfil">
                                        <img className="image" src={img}  alt=" "/>
                                    </Link>
                                </div>
                                <div className="hidebar-plus">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                            <div className="user-name">Furano</div>
                            <div className="user-code">@furano94746</div>
                        </li>
                        <li className="hidebar-li info">
                            <div className="hidebar-info">
                                <span style={{fontWeight: 600}}>13</span> Seguindo
                            </div>
                            <div className="hidebar-info">
                                <span style={{fontWeight: 600}}>0</span> Seguidor
                            </div>
                        </li>
                        <li className="hidebar-li">
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faUser} />
                                <span>Perfil</span>
                            </div>
                        </li>
                        <li className="hidebar-li">
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faClipboardList} />
                                <span>Listas</span>
                            </div>
                        </li>
                        <li className="hidebar-li">
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faCommentDots} />
                                <span>Tópicos</span>
                            </div>
                        </li>
                        <li className="hidebar-li">
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faBookmark} />
                                <span>Itens salvos</span>
                            </div>
                        </li>
                        <li className="hidebar-li">
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faBolt} />
                                <span>Moments</span>
                            </div>
                        </li>
                        <li className="hidebar-li" style={{borderTop: "0.5px solid rgb(90, 89, 89)"}}>
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faChartLine} />
                                <span>Anúncios do Twitter</span>
                            </div>
                        </li>
                        <li className="hidebar-li">
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faChartBar} />
                                <span>Estatísticas</span>
                            </div>
                        </li>
                        <li className="hidebar-li" style={{borderTop: "0.5px solid rgb(90, 89, 89)"}}>
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faCog} />
                                <span>Configurações e privacidade</span>
                            </div>
                        </li>
                        <li className="hidebar-li">
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faQuestionCircle} />
                                <span>Central de Ajuda</span>
                            </div>
                        </li>
                        <li className="hidebar-li li-check" style={{borderTop: "0.5px solid rgb(90, 89, 89)"}}>
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faChartPie} />
                                <span>Economia de dados</span>
                            </div>
                            <input type='checkbox' />
                        </li>
                        <li className="hidebar-li">
                            <div className="hidebar-li-icon">
                                <FontAwesomeIcon className="li-icons" icon={faPaintBrush} />
                                <span>Tela</span>
                            </div>
                        </li>
                        <li className="hidebar-li last" style={{borderTop: "0.5px solid rgb(90, 89, 89)"}}>
                            <div className="hidebar-li-icon">
                                <span>Sair</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="hidebar-complement">

                </div>
            </>
        )
    }else{
        return null
    }
    
}

