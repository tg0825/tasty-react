import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoutes = ({ auth, logged, id, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (id === 'edit') {
                    props.edit = true;
                }

                if (auth === 0) {
                    return <Component {...props} />;
                }

                return !logged ? <Redirect to="/" /> : <Component {...props} />;
            }}
        />
    );
};

AuthRoutes.propTypes = {
    id: PropTypes.string.isRequired,
    logged: PropTypes.bool.isRequired,
    component: PropTypes.any.isRequired,
    auth: PropTypes.number,
};

AuthRoutes.defaultProps = {
    auth: 0,
};

const mapStateToProps = state => ({
    logged: state.auth.logged,
});

export default connect(mapStateToProps)(AuthRoutes);
