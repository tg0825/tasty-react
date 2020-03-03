import React from 'react';
import { Link } from 'react-router-dom';

import { getRouteById } from 'Src/routes';

import Header from 'Ui/header';
const { MainNav } = Header;
const gnbIdList = ['shopList', 'add', 'modalexample'];

const HeaderMainNav = () => {
    return (
        <MainNav>
            {getRouteById(gnbIdList).map(nav => {
                return (
                    <MainNav.Link as={Link} key={nav.id} to={nav.path}>
                        {nav.name}
                    </MainNav.Link>
                );
            })}
        </MainNav>
    );
};

export default HeaderMainNav;
