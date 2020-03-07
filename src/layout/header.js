import React from 'react';
import { Link } from 'react-router-dom';

import HeaderMainNav from './header-main-nav';
import HeaderSubNav from './header-sub-nav';

import Hd from 'Style/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <Hd>
            <Hd.Logo as={Link} to="/">
                <FontAwesomeIcon icon="pizza-slice" />
            </Hd.Logo>
            <HeaderMainNav />
            <HeaderSubNav />
        </Hd>
    );
};

export default Header;
