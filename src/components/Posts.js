import React from 'react'
import PropTypes from 'prop-types'
import Listing from './Listing';

class Posts extends React.Component {
    state ={}
    render() {
        return (
            <div>
                <Listing
                    posts={this.props.posts}
                    deletePost={this.props.deletePost}
                    />
            </div>
        )
    }
}

export default Posts;