import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import Perfil from './pages/perfil'
import Notifications from './pages/notifications'
import Mentions from './pages/mentions'
import Messages from './pages/messages'
import LogOut from './pages/logout'
import LogIn from './pages/login'
import PasswordReset from './pages/password_reset'
import SignUp from './pages/signup'

import Hidebar from './components/hidebar'
import FooterBar from './components/footerbar'
import LeftNavbar from './components/leftNavbar'
import SideContent from './components/sidecontent'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LogOut}/>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/furano">
                <Hidebar/>
                <LeftNavbar/>
                <FooterBar/>
                <Route path="/furano/home" component={Home} />
                <Route path="/furano/perfil" component={Perfil} />
                <Route exact path="/furano/notifications" component={Notifications} />
                <Route path="/furano/notifications/mentions" component={Mentions} />
                <Route path="/furano/messages" component={Messages} />
                <SideContent/>
            </Route>
            <Route path="/account">
                <Route path="/account/begin_password_reset" component={PasswordReset} />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes