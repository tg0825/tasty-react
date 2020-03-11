import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { foodCategory } from 'Src/config';
import { FontAwesomeIcon as FW } from '@fortawesome/react-fontawesome';

import StGB from 'Style/grid-block';

const GridBlockItem = ({ item }) => {
    return (
        <StGB.Item
            as={Link}
            to={{
                pathname: '/shop/list',
                search: `?filter=${item.id}`,
            }}
        >
            <StGB.ItemContent>
                <FW icon={`${item.icon}`} size="2x" />
                <div>{item.label}</div>
            </StGB.ItemContent>
        </StGB.Item>
    );
};

GridBlockItem.propTypes = {
    item: PropTypes.object,
};

const GridBlock = () => {
    return (
        <StGB>
            {foodCategory.map(item => (
                <GridBlockItem key={item.id} item={item} />
            ))}
        </StGB>
    );
};

export default GridBlock;
