import React from 'react';
import { Link } from 'react-router-dom';

import HeaderMainNav from './header-main-nav';
import HeaderSubNav from './header-sub-nav';

import Header from 'Ui/header';

const LayoutHeader = () => {
    return (
        <Header>
            <Header.Logo as={Link} to="/">
                logo
            </Header.Logo>
            <HeaderMainNav />
            <HeaderSubNav />
        </Header>
    );
};

export default LayoutHeader;
