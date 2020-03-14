import React from 'react';
import PropTypes from 'prop-types';

import StCardV from 'Style/card-v';

const CardV = props => {
    const { item, handleClickImage } = props;
    return (
        <StCardV as="li">
            <StCardV.Head>
                <img
                    onClick={e => handleClickImage(e)}
                    src="/images/image.jpg"
                    alt=""
                />
            </StCardV.Head>
            <StCardV.Body>
                <StCardV.Title>{item.name}</StCardV.Title>
                <StCardV.Desc>{item.desc}</StCardV.Desc>
                <StCardV.Price>{item.price}원</StCardV.Price>
            </StCardV.Body>
        </StCardV>
    );
};

CardV.propTypes = {
    item: PropTypes.object.isRequired,
    handleClickImage: PropTypes.func.isRequired,
};

export default CardV;
