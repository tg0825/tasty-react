import React from 'react';

import { action } from '@storybook/addon-actions';
import Pagination from '../src/components/pagination';

export default {
    title: 'Pagination',
    component: Pagination,
};

export const normal = () => <Pagination />;

normal.story = {
    name: 'pagination',
};
