import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRoutes = ({ id, component: Component, ...rest }) => {
    const isAuthenticated = true;
    return (
        <Route
            {...rest}
            render={props => {
                if (id === 'edit') {
                    props.edit = true;
                }
                return !isAuthenticated ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                );
            }}
        />
    );
};

AuthRoutes.propTypes = {
    id: PropTypes.string.isRequired,
    component: PropTypes.any.isRequired,
};

export default AuthRoutes;
