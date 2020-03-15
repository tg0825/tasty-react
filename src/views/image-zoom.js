import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ImageZoomWrap = styled.div`
    width: 100%;

    img {
        display: block;
        max-width: 100%;
    }
`;

const ImageZoom = props => {
    const { imageSrc } = props;

    return (
        <ImageZoomWrap>
            <img src={imageSrc} />
        </ImageZoomWrap>
    );
};

ImageZoom.propTypes = {
    imageSrc: PropTypes.string.isRequired,
};

export default ImageZoom;
