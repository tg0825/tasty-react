import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getRouteById } from 'Src/routes';

import Header from 'Ui/header';
const { SubNav } = Header;

const HeaderSubNav = props => {
    const { logged } = props;
    const subNavIdList = ['join', 'mypage'].filter(id => {
        if (!logged) {
            if (id === 'mypage') return false;
        }
        return true;
    });

    return (
        <SubNav>
            {getRouteById(subNavIdList).map(nav => {
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
