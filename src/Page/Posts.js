import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as shopActions from '../modules/shop';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

class Posts extends React.Component {
    componentDidMount() {
        const { asyncGetShops } = this.props;
        asyncGetShops();
    }

    showPosts = list => (
        <div>
            {list.map(({ id, title }, idx) => (
                <div key={idx}>
                    <Link to={`/post/${id}`}>
                        {id}:{title}
                    </Link>
                </div>
            ))}
        </div>
    );

    render() {
        const { list } = this.props;

        const helmet = () => {
            console.log(this.props);

            return (
                <Helmet>
                    <title>목록</title>
                    <meta name="description" content="목록" />
                </Helmet>
            );
        };

        if (!list.length) return null;

        return (
            <div>
                {helmet()}
                <div className="post-list">
                    {list.length === 0 ? null : this.showPosts(list)}
                </div>
            </div>
        );
    }
}

Posts.propTypes = {
    asyncGetShops: PropTypes.func.isRequired,
    list: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
    list: state.shop.items,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            asyncGetShops: shopActions.asyncGetShops,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
