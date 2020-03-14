import React from 'react';
import PropTypes from 'prop-types';

import Card from 'Comp/card-v';

import StCardVList from 'Style/card-v-list';

const CardVList = props => {
    const { items } = props;
    return (
        <StCardVList>
            {items.map(item => (
                <Card key={item.name} item={item} />
            ))}
        </StCardVList>
    );
};

CardVList.propTypes = {
    items: PropTypes.array.isRequired,
};

CardVList.defaultProps = {
    items: [],
};

export default CardVList;
