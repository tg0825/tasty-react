import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRoutes = ({ auth, id, component: Component, ...rest }) => {
    const { logged } = auth;
    return (
        <Route
            {...rest}
            render={props => {
                const { location } = props;
                const pathname = location.state ? location.state.referrer : '/';

                if (id === 'shopList' || id === 'detail') {
                    return <Component {...props} />;
                }

                if (id === 'join' || id === 'login') {
                    return logged ? (
                        <Redirect to={pathname} />
                    ) : (
                        <Component {...props} />
                    );
                }

                return !logged ? (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { referrer: location },
                        }}
                    />
                ) : (
                    <Component {...props} />
                );
            }}
        />
    );
};

AuthRoutes.propTypes = {
    id: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired,
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    location: PropTypes.object,
};

export default AuthRoutes;
