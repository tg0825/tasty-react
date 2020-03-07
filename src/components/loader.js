import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StLoader from 'Style/loader';

const Loader = () => (
    <StLoader>
        <FontAwesomeIcon icon="spinner" size="2x" spin />
    </StLoader>
);

export default Loader;
