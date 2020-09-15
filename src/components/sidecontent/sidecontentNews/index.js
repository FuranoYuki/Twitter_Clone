import React from 'react'
import {Link} from 'react-router-dom'

import News from './news'
import Trending from './trending'

import './styles.css'

export default function SideContentNews(){

    return(
        <div className="sidecontent-news">
            <div className="sidecontent-news-title">
                What's happening
            </div>
            <News/>
            <Trending/>
            <News/>
            <Trending/>
            <div className="sidecontent-news-showmore">
                <Link to="#">
                    Show more
                </Link>
            </div>
        </div>
    )
}