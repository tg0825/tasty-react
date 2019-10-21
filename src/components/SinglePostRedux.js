import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link} from 'react-router-dom';

class SinglePostRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: props.edit,
            title: '',
            body: '',
        }
    }
    
    findPostById(posts, id) {
        return posts.filter(post => {
            return post.id === Number(id);
        });
    }
    
    componentDidMount() {
        const {match} = this.props;
        const id = match.params.postId;
        this.props.asyncGetPost()
        .then(posts => {
            const post = this.findPostById(posts, id);
            const {title, body} = post[0];
            this.setState({
                title,
                body
            });
            console.log(this);
        });
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
        
        const {isEdit = false, title, body} = this.state;
        
        return (
            <div>
                <div>
                    제목: 
                    <input 
                        type="text"
                        value={title} 
                        onChange={(e) => {
                            const {value} = e.target;
                            this.setState({
                                title: value
                            });
                        }}
                        readOnly={!isEdit}/>
                </div>
                <div>
                    본문:
                    <textarea 
                        type="text"
                        value={body}
                        onChange={(e) => {
                            const {value} = e.target;
                            this.setState({
                                body: value
                            });
                        }}
                        readOnly={!isEdit}/>
                </div>
                <div className="post-button">
                    {
                        isEdit
                        ? <Link to={`/post/${id}/edit`}>완료</Link>
                        : <Link to={`/post/${id}/edit`}>수정</Link>
                    }
                    {
                        isEdit
                        ? null
                        : (<Link 
                            to="#"
                            onClick={()=>this.confirm(id)} 
                            className="btn btn-danger">
                            삭제
                        </Link>)
                    }
                </div> 
            </div>
        );
    }
    
    render() {
        const {match, posts} = this.props;
        const id = match.params.postId;
        const post = this.findPostById(posts, id);
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
