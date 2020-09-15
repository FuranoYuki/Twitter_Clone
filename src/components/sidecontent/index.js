import React from 'react'

import SidebarSearch from './sidecontentSearch'
import SideContentNews from './sidecontentNews'
import SideContentFollows from './sidecontentFollows'

import './styles.css'

export default function SideContent(){

    return(
        <div className="side-content">
            <SidebarSearch/>
            <SideContentNews/>
            <SideContentFollows/>
        </div>
    )
}