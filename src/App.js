import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import Header from './layout/header';
import Navigation from './layout/navigation';
import Footer from './layout/footer';
import AuthRouters from './auth-routers';

import routes from './routes';

const NotFound = () => <div>404</div>;

class App extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default App;
