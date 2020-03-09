import React from 'react';

import { action } from '@storybook/addon-actions';
import Loader from '../src/components/loader';

export default {
    title: 'Loader',
    component: Loader,
};

export const normal = () => <Loader />;
