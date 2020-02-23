import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as shopActions from '../modules/shop';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
    componentDidMount() {
        const { asyncGetPostList } = this.props;
        asyncGetPostList();
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
        return (
            <div>
                <div className="post-list">
                    {list.length === 0 ? null : this.showPosts(list)}
                </div>
            </div>
        );
    }
}

Posts.propTypes = {
    asyncGetPostList: PropTypes.func.isRequired,
    list: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
    list: state.shop.items,
});

const mapDispatchToProps = dispatch => ({
    asyncGetPostList: () => dispatch(shopActions.asyncGetShops()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
