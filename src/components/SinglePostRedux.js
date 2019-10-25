import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link, Redirect} from 'react-router-dom';
import styled from 'styled-components'

const TitleInput = styled.input`
width: 300px;
padding: 4px;
border: 1px solid #eee;
&:read-only {
    border: 1px solid #fff;
}
`;

const Content = styled.textarea`
width: 300px;
padding: 4px;
border: 1px solid #eee;
&:read-only {
    border: 1px solid #fff;
}
`;

class SinglePostRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: props.edit,
            redirect: false,
            title: '',
            body:''
        }
        this.id = this.props.match.params.postId;
    }
    
    componentDidMount() {
        this.props.asyncGetPost(this.id)
        .then(res=>{
            this.setState(res);
        });
    }
    
    handlePatch = () => {
        const {title, body} = this.state;
        this.props.asyncPatchPost({
            id: this.id,
            title,
            body
        })
        .then((res) => {
            this.setState(res);
        })
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
        const {patchPost} = this.props;
        
        return (
            <div>
                <div>
                    제목: 
                    <TitleInput 
                        type="text"
                        name="title"
                        value={title} 
                        onChange={(e) => {
                            const {value, name} = e.target;
                            this.setState ({
                                [name]: value
                            });
                        }}
                        readOnly={!isEdit}/>
                </div>
                <div>
                    본문:
                    <Content 
                        rows="10"
                        type="text"
                        name="body"
                        value={body}
                        onChange={(e) => {
                            const {value, name} = e.target;
                            this.setState ({
                                [name]: value
                            });
                        }}
                        readOnly={!isEdit}/>
                </div>
                <div className="post-button">
                    <Link to='/'>맛집 목록</Link>
                    {
                        isEdit
                        ? <button type="button" onClick={this.handlePatch}>완료</button>
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
  deletePost: payload => dispatch(actions.deletePost(payload)),
  patchPost: payload => dispatch(actions.patchPost(payload)),
  asyncPatchPost: payload => dispatch(actions.asyncPatchPost(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostRedux);
