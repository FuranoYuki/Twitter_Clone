import React from 'react'

import NavbarNotifications from '../../components/navbars/navbarNotifications'

import './styles.css'

export default function Mentions(){


    return(
        <>
            <NavbarNotifications/>
            <div className="mentions">
                <div className="mentions-title">
                    Nothing to see here — yet
                </div>
                <div className="mentions-warning">
                    <p>
                        When someone mentions you, 
                        you’ll find it here.
                    </p>
                </div>
            </div>
        </>
    )
}