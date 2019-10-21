import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link} from 'react-router-dom';

class SinglePostRedux extends React.Component {
    componentDidMount() {
        this.props.asyncGetPost();
    }
    
    confirm = (id) => {
        if (!confirm('delete?')) return false;
        this.props.deletePost(id)
        .then((res)=>{
            console.log(res);
            alert('success');
        });
    }
    
    deletePost = (id) => {
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
    
    showPost = ({post, id}) => {
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
                    본문:
                    {body}
                </div>
                <div className="post-button">
                    <Link to={`/post/edit/${id}`}>수정</Link>
                    <Link 
                        to="#"
                        onClick={()=>this.confirm(id)} 
                        className="btn btn-danger">
                        삭제
                    </Link>
                </div> 
            </div>
        );
    }
    
    render() {
        const {posts, match} = this.props;
        const id = match.params.postId;
        const post = posts.filter(post => (
            post.id === Number(id)
        ));
        return (
            <div>
                {this.showPost({post: post[0], id})}
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
