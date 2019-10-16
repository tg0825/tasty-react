import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import Post from './Post';
import * as actions from '../actions';

class Listing extends React.Component {
    showPosts = () => {
        const posts = this.props.posts;
        if (posts.length === 0) return null;
        return (
            <div>
                {posts.map((post, idx) => (
                    <Post key={idx} info={post} />
                ))}
            </div>
        )
    }
    
    render() {
        return (
            <div className="post-list">
                {this.showPosts()}
            </div>
        )
    }
}

export default connect()(Listing);
