import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as shopActions from 'Modules/shop';

import CardList from 'Style/card-list';
import Card from 'Style/card';

const ShopList = props => {
    const { items } = props;
    return (
        <CardList>
            {items.data.map(({ id, title, thumbnailUrl }, idx) => (
                <Card as={Link} key={idx} to={`/shop/${id}`}>
                    <Card.Img src={`${thumbnailUrl}`} alt="" />
                    <Card.Title>{title}</Card.Title>
                </Card>
            ))}
        </CardList>
    );
};

ShopList.propTypes = {
    asyncGetShops: PropTypes.func.isRequired,
    asyncGetShop: PropTypes.func.isRequired,
    items: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
    items: state.shop.items,
});

const mapDispatchToProps = {
    asyncGetShops: shopActions.asyncGetShops,
    asyncGetShop: shopActions.asyncGetShop,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
