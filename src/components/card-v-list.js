import React from 'react';
import PropTypes from 'prop-types';

import CardV from 'Comp/card-v';

import StCardVList from 'Style/card-v-list';

const CardVList = props => {
    const { items, handleClickImage } = props;
    return (
        <StCardVList>
            {items.map(item => (
                <CardV
                    key={item.name}
                    item={item}
                    handleClickImage={handleClickImage}
                />
            ))}
        </StCardVList>
    );
};

CardVList.propTypes = {
    items: PropTypes.array.isRequired,
    handleClickImage: PropTypes.func.isRequired,
};

CardVList.defaultProps = {
    items: [],
};

export default CardVList;
