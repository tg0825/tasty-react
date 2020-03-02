import React from 'react';
import { Link } from 'react-router-dom';

import HeaderMainNav from './header-main-nav';
import HeaderSubNav from './header-sub-nav';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">사내맛집</Link>
            <HeaderMainNav />
            <HeaderSubNav />
        </header>
    );
};

export default Header;
