import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SinglePostRedux extends React.Component {
    componentDidMount() {
        this.props.asyncGetPost();
    }
    
    showPost = (post) => {
        if (!post) return null;
        
        const {title, author, body} = post;
        
        return (
            <div>
                <div>
                    제목: 
                    {title}
                </div>
                <div>
                    작성자: 
                    {author}
                </div>
                <div>
                    내용
                    {body}
                </div>
            </div>
        );
    }
    
    render() {
        let idPost = this.props.match.params.postId;
        const {posts} = this.props;
        let filter = posts.filter(post => (
            post.id === Number(idPost)
        ));
    
        return (
            <div>
                {this.showPost(filter[0])}
            </div>
        )
    }
}

const mapStateToProps = state => ({
  posts: state.post.list
});

const mapDispatchToProps = dispatch => ({
  asyncGetPost: payload => dispatch(actions.asyncGetPost(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostRedux);
