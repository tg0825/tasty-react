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
        this.id = this.props.match.params.postId;
    }
    
    componentDidMount() {
        this.props.asyncGetPost(this.id)
        .then(post => {
            const {title, body} = post;
            this.setState({
                title,
                body
            });
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
    
    showPost = () => {
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
                    <Link to='/'>맛집 목록</Link>
                    {
                        isEdit
                        ? <Link to={`/post/${this.id}/edit`}>완료</Link>
                        : <Link to={`/post/${this.id}/edit`}>수정</Link>
                    }
                    {
                        isEdit
                        ? null
                        : (<Link 
                            to="#"
                            onClick={()=>this.confirm(this.id)} 
                            className="btn btn-danger">
                            삭제
                        </Link>)
                    }
                </div> 
            </div>
        );
    }
    
    render() {
        return (
            <div>
                {this.showPost()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.post.currentPost
    }
};

const mapDispatchToProps = dispatch => ({
  asyncGetPost: payload => dispatch(actions.asyncGetPost(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostRedux);
