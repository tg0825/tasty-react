import React from 'react';
import { Link } from 'react-router-dom';

const gnbList = [
    {
        id: 'posts',
        path: '/posts',
        label: '맛집 목록',
    },
    {
        id: '추가',
        path: '/create',
        label: '맛집 추가',
    },
    {
        id: 'join',
        path: '/join',
        label: '회원가입',
    },
];

const renderNav = () => {
    return gnbList.map(item => (
        <Link className="header--nav" key={item.id} to={item.path}>
            {item.label}
        </Link>
    ));
};

const header = () => {
    return (
        <div className="header">
            <Link to="/">사내맛집</Link>
            {renderNav()}
        </div>
    );
};

export default header;
