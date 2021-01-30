import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Componentes
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Login from './pages/Login';

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/page2" component={Page2} />
            </Switch>
        </HashRouter>
    )
}

export default Router;