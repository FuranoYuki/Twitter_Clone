import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faComment,
    faRetweet,
    faHeart,
    faDownload,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import ImagePost from '../../img/post-image.jpg'
import ImageEmo from '../../img/emo.jpg'
import NavbarHome from '../../components/navbars/navbarHome'


export default function Home(){

    function heartLike(event){
        const heart = document.querySelector('.social-heart.social')
        if(heart.className === 'social-heart social'){
            heart.classList.add('heart')
        }else{
            heart.classList.remove('heart')
        }
    }
    
    return(
        <>  
            <NavbarHome/>
            <div className="Home">
                <div className="post">
                    <div className="post-left">
                        <img src={ImageEmo} alt=" "/>
                    </div>
                    <div className="post-right">
                        <div className="post-info">
                            <div className="info-user">
                                <div className="info-nick">
                                    Viper
                                </div>
                                <div className="info-code">
                                    @viper9090
                                </div>
                                <div className="info-time">
                                    * 10 min
                                </div>
                            </div>
                            <div className="info-plus">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                        <div className="post-description">
                            <p>
                                Vai tomar no cu, cade o meu whiskas
                                eu vou comper o cu de todos os que nunca me deram whiskas
                            </p>
                        </div>
                        <div className="post-image">
                            <img src={ImagePost} alt=" "/>
                        </div>
                        <div className="post-social">
                            <div className="social-comments social">
                                <FontAwesomeIcon icon={faComment} />
                                <div className="comments-value social-value">
                                    20
                                </div>
                            </div>
                            <div className="social-shared social">
                                <FontAwesomeIcon icon={faRetweet} />
                                <div className="shared-value social-value">
                                    20
                                </div>
                            </div>
                            <div className="social-heart social" onClick={heartLike}>
                                <FontAwesomeIcon icon={faHeart} />
                                <div className="heart-value social-value">
                                    20
                                </div>
                            </div>
                            <div className="social-plus social social-value">
                                <FontAwesomeIcon icon={faDownload} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <div className="post-left">
                        <img src={ImageEmo} alt=" "/>
                    </div>
                    <div className="post-right">
                        <div className="post-info">
                            <div className="info-user">
                                <div className="info-nick">
                                    Viper
                                </div>
                                <div className="info-code">
                                    @viper9090
                                </div>
                                <div className="info-time">
                                    * 10 min
                                </div>
                            </div>
                            <div className="info-plus">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                        <div className="post-description">
                            <p>
                                Vai tomar no cu, cade o meu whiskas
                                eu vou comper o cu de todos os que nunca me deram whiskas
                            </p>
                        </div>
                        <div className="post-image">
                            <img src={ImagePost} alt=" " />
                        </div>
                        <div className="post-social">
                            <div className="social-comments social">
                                <FontAwesomeIcon icon={faComment} />
                                <div className="comments-value social-value">
                                    20
                                </div>
                            </div>
                            <div className="social-shared social">
                                <FontAwesomeIcon icon={faRetweet} />
                                <div className="shared-value social-value">
                                    20
                                </div>
                            </div>
                            <div className="social-heart social" onClick={heartLike}>
                                <FontAwesomeIcon icon={faHeart} />
                                <div className="heart-value social-value">
                                    20
                                </div>
                            </div>
                            <div className="social-plus social social-value">
                                <FontAwesomeIcon icon={faDownload} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <div className="post-left">
                        <img src={ImageEmo} alt=" "/>
                    </div>
                    <div className="post-right">
                        <div className="post-info">
                            <div className="info-user">
                                <div className="info-nick">
                                    Viper
                                </div>
                                <div className="info-code">
                                    @viper9090
                                </div>
                                <div className="info-time">
                                    * 10 min
                                </div>
                            </div>
                            <div className="info-plus">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                        <div className="post-description">
                            <p>
                                Vai tomar no cu, cade o meu whiskas
                                eu vou comper o cu de todos os que nunca me deram whiskas
                            </p>
                        </div>
                        <div className="post-image">
                            <img src={ImagePost} alt=" "/>
                        </div>
                        <div className="post-social">
                            <div className="social-comments social">
                                <FontAwesomeIcon icon={faComment} />
                                <div className="comments-value social-value">
                                    20
                                </div>
                            </div>
                            <div className="social-shared social">
                                <FontAwesomeIcon icon={faRetweet} />
                                <div className="shared-value social-value">
                                    20
                                </div>
                            </div>
                            <div className="social-heart social" onClick={heartLike}>
                                <FontAwesomeIcon icon={faHeart} />
                                <div className="heart-value social-value">
                                    20
                                </div>
                            </div>
                            <div className="social-plus social social-value">
                                <FontAwesomeIcon icon={faDownload} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}