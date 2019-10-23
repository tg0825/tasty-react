import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link, Redirect} from 'react-router-dom';

class SinglePostRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: props.edit,
            title: '',
            body: '',
            redirect: false
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
    
    delete = (id) => {
        if (!confirm('삭제 하시겠습니까?')) return false;
        this.props.deletePost(id)
        .then((res)=>{
            alert('삭제 되었습니다.');
            this.setState({
                redirect: true
            });
        });
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
                            onClick={()=>this.delete(this.id)}>
                            삭제
                        </Link>)
                    }
                </div> 
            </div>
        );
    }
    
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/'/>;
        }
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
  deletePost: payload => dispatch(actions.deletePost(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostRedux);
