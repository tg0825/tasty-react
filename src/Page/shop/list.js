import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import * as shopActions from 'Modules/shop';
import Pagination from 'Comp/pagination';

class Posts extends React.Component {
    componentDidMount() {
        const { asyncGetShops } = this.props;
        asyncGetShops();
    }

    showPosts = list => (
        <div>
            {list.map(({ id, title }, idx) => (
                <div key={idx}>
                    <Link to={`/shop/${id}`}>
                        {id}:{title}
                    </Link>
                </div>
            ))}
        </div>
    );

    render() {
        const { items, asyncGetShops } = this.props;
        const { data = [] } = items;

        const helmet = () => {
            return (
                <Helmet>
                    <title>목록</title>
                    <meta name="description" content="목록" />
                </Helmet>
            );
        };

        if (!data.length) return null;

        return (
            <div>
                {helmet()}
                <div className="post-list">
                    {data.length === 0 ? null : this.showPosts(data)}
                </div>
                <Pagination
                    paginationData={items}
                    onClickPageBtn={pageData => {
                        asyncGetShops(Object.assign({}, pageData));
                    }}
                />
            </div>
        );
    }
}

Posts.propTypes = {
    asyncGetShops: PropTypes.func.isRequired,
    items: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
    items: state.shop.items,
});

const mapDispatchToProps = {
    asyncGetShops: shopActions.asyncGetShops,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
