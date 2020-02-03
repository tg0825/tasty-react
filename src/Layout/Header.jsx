import React from 'react';
import {Link} from 'react-router-dom';

const nav = [
    {
        id: 'main',
        path: '/',
        label: '메인'
    },
   {
        id: 'posts',
        path: '/posts',
        label: '맛집 목록'
    },
    {
        id: '추가',
        path: '/create',
        label: '맛집 추가'
    },
];

const renderNav = () => {
    return nav.map(item =>
        <Link className="header--nav" key={item.id} to={item.path}>{item.label}</Link>
        );
}

export default () => {
    return (
        <div className="header">
            <Link to="/">
                사내맛집
            </Link>
            {renderNav()}
        </div>
    );
};