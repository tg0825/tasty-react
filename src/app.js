import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './layout/header';
import Navigation from './layout/navigation';
import Footer from './layout/footer';
import AuthRouters from './auth-routers';

import routes from './routes';

import Main from 'Pages/Main';

import './fa-library';

const NotFound = () => <div>404</div>;

class App extends React.Component {
    render() {
        const { auth } = this.props;
        return (
            <div>
                <Helmet titleTemplate="%s | 맛집" defaultTitle="맛집">
                    <meta name="description" content="사내맛집" />
                    <meta
                        name="viewport"
                        content="width=device-width, user-scalable=no"
                    />
                </Helmet>
                <Header />
                <Navigation />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => <Main {...props} />}
                    />
                    {routes.map(({ id, path, component }) => {
                        return (
                            <AuthRouters
                                exact
                                auth={auth}
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

App.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({
    auth,
});

export default connect(mapStateToProps)(App);
