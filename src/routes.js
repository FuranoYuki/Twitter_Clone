import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import Perfil from './pages/perfil'
import Notifications from './pages/notifications'
import Mentions from './pages/mentions'
import Messages from './pages/messages'


import Hidebar from './components/hidebar'
import FooterBar from './components/footerbar'
import LeftNavbar from './components/leftNavbar'
import SideContent from './components/sidecontent'


const Routes = () => (
    <BrowserRouter>
        <LeftNavbar/>
        <Hidebar/>
        <FooterBar/>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/perfil" component={Perfil} />
            <Route exact path="/notifications" component={Notifications} />
            <Route path="/notifications/mentions" component={Mentions} />
            <Route path="/messages" component={Messages} />
        </Switch>
        <SideContent/>
    </BrowserRouter>
)

export default Routes