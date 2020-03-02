import React from 'react';
import { getRouteById } from 'Src/routes';
import { Link } from 'react-router-dom';

const subNavIdList = ['mypage'];

const HeaderSubNav = () => {
    return getRouteById(subNavIdList).map(nav => {
        return (
            <Link key={nav.id} to={nav.path}>
                {nav.name}
            </Link>
        );
    });
};

export default HeaderSubNav;
