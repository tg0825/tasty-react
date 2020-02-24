import React from 'react';
import { Helmet } from 'react-helmet';
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
                <Helmet>
                    <title>맛집</title>
                    <meta name="description" content="사내맛집" />
                </Helmet>
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
