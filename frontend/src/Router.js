import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';

// Componentes
import App from './components/App';
import Page2 from './pages/Page2';

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/page2" component={Page2} />
            </Switch>
        </HashRouter>
    )
}

export default Router;