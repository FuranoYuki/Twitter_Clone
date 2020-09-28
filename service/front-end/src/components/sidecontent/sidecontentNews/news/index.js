import React from 'react'

import ImageNews from '../../../../img/post-image.jpg'
import './styles.css'

export default function News(){

    return(
        <div className="news">
            <div className="news-info">
                <div className="news-font">
                    <div className="news-font-name">
                        Televisão
                    </div>
                    <div className="news-font-date">
                         * 2 hours ago
                    </div>
                </div>
                <div className="news-description">
                    <p> 
                        O mundo está acabando, todos vão
                        morrer.
                    </p>
                </div>
            </div>
            <div className="news-image">
                <img className="news-image-img" src={ImageNews} alt=" " />
            </div>
        </div>
    )
}