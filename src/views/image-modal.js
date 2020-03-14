import React from 'react';
import PropTypes from 'prop-types';

const ImageModal = props => {
    const { imageSrc } = props;

    return (
        <div>
            <img src={imageSrc} />
        </div>
    );
};

ImageModal.propTypes = {
    imageSrc: PropTypes.string.isRequired,
};

export default ImageModal;
