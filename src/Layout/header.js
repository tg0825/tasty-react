import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'Src/routes';

const gnbList = ['shopList', 'add', 'join'];

const renderNav = () => {
    return gnbList.map(value => {
        const item = routes.filter(({ id }) => id === value)[0];

        return (
            <Link className="header--nav" key={item.id} to={item.path}>
                {item.name}
            </Link>
        );
    });
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
