import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Footer from './Layout/Footer';
import AuthRouters from './AuthRouters';

import routes from './routes';

const NotFound = () => <div>404</div>;

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Navigation />
                <Switch>
                    {routes.map(({ id, path, component }) => {
                        return (
                            <AuthRouters
                                exact
                                key={id}
                                id={id}
                                path={path}
                                component={component}
                            />
                        );
                    })}
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
