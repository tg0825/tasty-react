import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRoutes = ({ logged, id, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (id === 'shopList' || id === 'detail') {
                    return <Component {...props} />;
                }

                if (id === 'join' || id === 'login') {
                    return logged ? (
                        <Redirect to="/" />
                    ) : (
                        <Component {...props} />
                    );
                }

                return !logged ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                );
            }}
        />
    );
};

AuthRoutes.propTypes = {
    id: PropTypes.string.isRequired,
    logged: PropTypes.bool.isRequired,
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default AuthRoutes;
