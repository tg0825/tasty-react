import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';
import {createLogger} from 'redux-logger';
import {
    BrowserRouter as Router, 
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

import {Provider} from 'react-redux';
import middleware from './middleware';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger, ReduxThunk));

const About = () => {
    return <div>about</div>;
}

const Users = () => {
    return <div>users</div>;
}

const NotFound = () => {
    return <div>404</div>
}

ReactDom.render(
    <Provider store={store}>
        <Router>
            <header>
                <NavLink activeClassName="active" to="/">home</NavLink>
                <NavLink activeClassName="active" to="/About">About</NavLink>
                <NavLink activeClassName="active" to="/Users">Users</NavLink>
            </header>
            
            <Switch>
                <Route exact path="/" component={Root}/>
                <Route path="/About" component={About}/>
                <Route path="/Users" component={Users}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);