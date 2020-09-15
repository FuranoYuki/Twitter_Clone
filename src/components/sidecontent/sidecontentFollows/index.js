import React from 'react'
import {Link} from 'react-router-dom'

import ImageUser1 from '../../../img/amorzin1.jpg'
import ImageUser2 from '../../../img/Amorzin2.jpg'


import './styles.css'

export default function SideContentFollows(){

    return(
        <div className="sidecontent-follows">

            <div className="sidecontent-follows-title">
                Who to follow
            </div>

            <div className="sidecontent-follows-user">
                <div className="sidecontent-follows-user-img">
                    <img className="sfyii" src={ImageUser1} />
                </div>
                <div className="sidecontent-follows-user-info">
                    <div className="sc-f-u-i-nick">
                        Picano
                    </div>
                    <div className="sc-f-u-i-code">
                        @pi0980
                    </div>
                </div>
                <div className="sidecontent-follows-user-follow">
                    Follow
                </div>
            </div>

            <div className="sidecontent-follows-user">
                <div className="sidecontent-follows-user-img">
                    <img className="sfyii" src={ImageUser2} />
                </div>
                <div className="sidecontent-follows-user-info">
                    <div className="sc-f-u-i-nick">
                        Picano
                    </div>
                    <div className="sc-f-u-i-code">
                        @pi0980
                    </div>
                </div>
                <div className="sidecontent-follows-user-follow">
                    Follow
                </div>
            </div>


            <div className="sidecontent-follow-showmore">
                <Link to="#">
                    show more
                </Link>
            </div>

        </div>
    )
}