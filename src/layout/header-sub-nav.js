import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getRouteById } from 'Src/routes';

import Header from 'Ui/header';
const { SubNav } = Header;

const nav = ['join', 'mypage', 'logout'];

const HeaderSubNav = props => {
    const { logged } = props;

    const filterdNav = nav.filter(id => {
        if (logged) {
            if (id === 'mypage' || id === 'logout') {
                return true;
            }
        }

        if (!logged) {
            if (id === 'join') return true;
        }
        return false;
    });

    return (
        <SubNav>
            {getRouteById(filterdNav).map(nav => {
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
};

const mapStateToProps = state => ({
    logged: state.auth.logged,
});

export default connect(mapStateToProps)(HeaderSubNav);
