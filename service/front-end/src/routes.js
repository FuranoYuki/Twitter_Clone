import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

//components
import Home from './pages/home'
import Perfil from './pages/perfil'
import Notifications from './pages/notifications'
import Mentions from './pages/mentions'
import Messages from './pages/messages'
import LogOut from './pages/logout'
import LogIn from './pages/login'
import PasswordReset from './pages/password_reset'
import SignUp from './pages/signup'

//pages
import Hidebar from './components/hidebar'
import FooterBar from './components/footerbar'
import LeftNavbar from './components/leftNavbar'
import SideContent from './components/sidecontent'

//auth
import  {isAuthenticated} from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LogOut}/>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/furano">
                <PrivateRoute component={Hidebar}/>
                <PrivateRoute component={LeftNavbar}/>
                <PrivateRoute component={FooterBar}/>
                <PrivateRoute path="/furano/home" component={Home} />
                <PrivateRoute path="/furano/perfil" component={Perfil} />
                <PrivateRoute exact path="/furano/notifications" component={Notifications} />
                <PrivateRoute path="/furano/notifications/mentions" component={Mentions} />
                <PrivateRoute path="/furano/messages" component={Messages} />
                <PrivateRoute component={SideContent}/>
            </Route>
            <Route path="/account">
                <Route path="/account/begin_password_reset" component={PasswordReset} />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes