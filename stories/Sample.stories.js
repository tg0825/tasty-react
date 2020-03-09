import React from 'react';

import { action } from '@storybook/addon-actions';
import Sample from '../src/components/sample';

export default {
    title: 'Sample',
    component: Sample,
};

export const normal = () => (
    <Sample onClick={action('clicked')}>Hello Button</Sample>
);
