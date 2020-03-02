import React from 'react';
import { Link } from 'react-router-dom';

import { getRouteById } from 'Src/routes';

import Header from 'Ui/header';
const { SubNav } = Header;
const subNavIdList = ['join', 'mypage'];

const HeaderSubNav = () => {
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

export default HeaderSubNav;
