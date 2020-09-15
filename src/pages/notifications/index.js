import React from 'react'

import NavbarNotifications from '../../components/navbars/navbarNotifications'

import './styles.css'

export default function Notifications(){


    return(
        <>
            <NavbarNotifications/>
            <div className="notifications">
                <div className="notifications-title">
                    Nothing to see here — yet
                </div>
                <div className="notifications-warning">
                    <p>
                    From likes to Retweets and a whole 
                    lot more, this is where all the action happens.
                    </p>
                </div>
            </div>
        </>
    )
}