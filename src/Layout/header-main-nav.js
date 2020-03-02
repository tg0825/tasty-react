import React from 'react';
import { Link } from 'react-router-dom';

import { getRouteById } from 'Src/routes';

const gnbIdList = ['shopList', 'add', 'join'];

const HeaderMainNav = () => {
    return getRouteById(gnbIdList).map(nav => {
        return (
            <Link className="header--nav" key={nav.id} to={nav.path}>
                {nav.name}
            </Link>
        );
    });
};

export default HeaderMainNav;
