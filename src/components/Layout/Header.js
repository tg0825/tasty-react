import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div className="header">
            <Link to="/">
                사내맛집
            </Link>
            로그인
        </div>
    );
};