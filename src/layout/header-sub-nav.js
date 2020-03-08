import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { getRouteById } from 'Src/routes';
import * as authActions from 'Modules/auth';

import Header from 'Style/header';

const { SubNav } = Header;

const nav = ['join', 'login', 'mypage', 'logout'];

const HeaderSubNav = props => {
    const { logged, logout } = props;
    const history = useHistory();

    const filterdNav = nav.filter(id => {
        if (logged) {
            if (id === 'mypage' || id === 'logout') return true;
        }

        if (!logged) {
            if (id === 'join' || id === 'login') return true;
        }
        return false;
    });

    return (
        <SubNav>
            {getRouteById(filterdNav).map(nav => {
                if (nav.id === 'logout') {
                    return (
                        <SubNav.Link
                            key={nav.id}
                            onClick={e => {
                                e.preventDefault();
                                logout();
                                history.push('/');
                            }}
                        >
                            {nav.name}
                        </SubNav.Link>
                    );
                }
                return (
                    <SubNav.Link as={Link} key={nav.id} to={nav.path}>
                        {nav.name}
                    </SubNav.Link>
                );
            })}
        </SubNav>
    );
};

HeaderSubNav.propTypes = {
    logged: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    logged: state.auth.logged,
});

const mapDispatchToProps = {
    logout: authActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSubNav);
