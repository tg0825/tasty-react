import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoutes = ({component: Component, ...rest}) => {
    const isAuthenticated = true;
    return (
        <Route 
            {...rest} 
            render={props => {
                return !isAuthenticated
                ? (<Redirect to="/" />)
                : (<Component {...props} />)
            }}
        />
    )
}

export default AuthRoutes;