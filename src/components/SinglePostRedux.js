import React from 'react';
import PropTypes from 'prop-types';
import {} from '../actions';

class SinglePostRedux extends React.Component {
    let idPost = props.location.pathname.replace('/post/', '');
    
    const posts=this.state.posts;
    let filter;
    filter = posts.filter(post => (
        post.id === Number(idPost)
    ));
    
    showPost = (props) => {
        if (!props.post) return null;
        
        const {title, author} = this.props.post;
        
        return (
            <div>
                <div>
                    {title}
                </div>
                <div>
                    {author}
                </div>
            </div>
        );
    }
    
    render() {
        return (
            <div>
                {this.showPost(this.props)}
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

const SinglePostRedux = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default SinglePostRedux;
