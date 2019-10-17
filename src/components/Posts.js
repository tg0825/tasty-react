import React from 'react'
import PropTypes from 'prop-types'
import Listing from './Listing';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Posts extends React.Component {
    componentDidMount() {
        this.props.asyncGetPost();
    }
    
    deletePost = (id) => {
        //console.log(id);
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if (res.status === 200) {
                const posts = [...this.state.posts];
                let result = posts.filter(post => (
                    post.id !== id
                ));
                this.setState({
                    posts: result
                })
            } 
        })
    }    
    
    render() {
        return (
            <div>
                <Listing
                    posts={this.props.postList}
                    deletePost={this.props.deletePost}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => ({
  postList: state.post.list
});

const mapDispatchToProps = dispatch => ({
  asyncGetPost: payload => dispatch(actions.asyncGetPost(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
