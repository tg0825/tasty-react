import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from 'Modules/auth';
import { Redirect } from 'react-router-dom';

const Logout = props => {
    const { logout } = props;
    logout();
    return <Redirect to="/" />;
};

Logout.propTypes = {
    logout: PropsTypes.func.isRequired,
};

const maptDispatchToProps = {
    logout: authActions.logout,
};

export default connect(null, maptDispatchToProps)(Logout);
