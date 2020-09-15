import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'

import './styles.css'

import NavbarPerfil from '../../components/navbars/navbarPerfil'

import ImageCover from '../../img/post-image.jpg'
import ImagePefil from '../../img/emo.jpg'

export default function Perfil(){

    return(
        <>
            <NavbarPerfil/>
            <div className="perfil">
                <div className="perfil-user">
                    <div className="perfil-cover">
                        <img src={ImageCover} />
                    </div>
                    <div className="perfil-social">
                        <div className="social-perfil">
                            <div className="social-image">
                                <img src={ImagePefil} />
                            </div>
                            <div className="social-info">
                                <div className="info-config">
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </div>
                                <div className="info-bell">

                                </div>
                                <div className="info-follow">
                                    Seguindo
                                </div>
                            </div>  
                        </div>
                        <div className="perfil-nick">
                            Felipe Golçaves
                        </div>
                        <div className="perfil-code">
                            @viper9090
                        </div>
                        <div className="perfil-description">
                            <p>
                                Vai tomar no cu eu só quero terminar esse projeto
                                e torçe para conseguir um primeiro emprego
                            </p>
                        </div>
                        <div className="perfil-info">
                            <div>
                                instragram.com/viper/
                            </div>
                        </div>
                        <div className="perfil-datas">
                            <div className="datas-follow datas">
                                <span className="data-numb">290</span> Seguindo
                            </div>
                            <div className="datas-follower datas">
                                <span className="data-numb">400</span> Seguidores
                            </div>
                        </div>
                        <div className="perfil-twitter">
                            <div className="perfil-tweets">
                                Tweets
                            </div>
                            <div className="perfil-tweet-ans">
                                respostas
                            </div>
                            <div className="perfil-midia">
                                Mídia
                            </div>
                            <div className="perfil-curtida">
                                Curtida
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}