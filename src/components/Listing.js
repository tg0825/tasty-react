import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post';

class Listing extends React.Component {
    showPosts = () => {
        const posts = this.props.posts;
        if (posts.length === 0) return null;
        return (
            <div>
                {Object.keys(posts).map(post => (
                    <Post 
                        key={post}
                        info={this.props.posts[post]}
                        deletePost={this.props.deletePost}
                    />
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

export default Listing;