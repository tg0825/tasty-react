import React from 'react';

import { action } from '@storybook/addon-actions';
import Pagination from 'Comp/pagination';

export default {
    title: 'components|basic/Pagination', // 스토리북에서 보여질 그룹과 경로를 명시
    component: Pagination,
    excludeStories: /.*Data$/,
};

export const paginationData = {
    headers: {
        'x-total-count': 100,
    },
};

export const actionsData = {
    onClickPageBtn: action('click pagination btn'),
};

export const normal = () => (
    <Pagination {...actionsData} paginationData={{ ...paginationData }} />
);
