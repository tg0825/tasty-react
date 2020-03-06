import React from 'react';
import { Link } from 'react-router-dom';

import HeaderMainNav from './header-main-nav';
import HeaderSubNav from './header-sub-nav';

import Hd from 'Style/header';

const Header = () => {
    return (
        <Hd>
            <Hd.Logo as={Link} to="/">
                logo
            </Hd.Logo>
            <HeaderMainNav />
            <HeaderSubNav />
        </Hd>
    );
};

export default Header;
