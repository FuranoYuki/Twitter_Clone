import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

import './styles.css'

export default function Trending(){

    return(
        <div className="trending">
            <div className="trending-info">
                <div className="trending-info-title">
                    Trending in Brazil
                </div>
                <div className="trending-info-options">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
            <div className="trending-descriptions">
                Blink
            </div>
            <div className="trending-social">
                <div className="trending-social-value">
                    90.1k Tweets
                </div>
            </div>
        </div>
    )
}