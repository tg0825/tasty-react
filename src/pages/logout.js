import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from 'Modules/auth';

const Logout = props => {
    const { logout } = props;
    logout();
    return null;
};

Logout.propTypes = {
    logout: PropsTypes.func.isRequired,
};

const maptDispatchToProps = {
    logout: authActions.logout,
};

export default connect(null, maptDispatchToProps)(Logout);
