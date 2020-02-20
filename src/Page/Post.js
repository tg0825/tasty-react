import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

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

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: props.edit,
            redirect: false,
            title: '',
            body: '',
        };
        this.id = props.match.params.postId;
    }

    componentDidMount() {
        if (this.id) {
            this.props.asyncGetPost(this.id).then(res => {
                this.setState(res);
            });
        }
    }

    handleAdd = e => {
        const { title, body } = this.state;
        this.props.addPost({
            title,
            body,
        });
    };

    handlePatch = () => {
        const { title, body } = this.state;
        this.props
            .asyncPatchPost({
                id: this.id,
                title,
                body,
            })
            .then(res => {
                this.setState(res);
            });
    };

    delete = id => {
        if (!confirm('삭제 하시겠습니까?')) return false;
        this.props.deletePost(id).then(res => {
            alert('삭제 되었습니다.');
            this.setState({
                redirect: true,
            });
        });
    };

    showPost = () => {
        const { id } = this;
        const { isEdit = false, title, body } = this.state;
        const { patchPost } = this.props;
        const isRead = !id || isEdit ? false : true;

        const displayBtns = () => {
            // 최초 등록
            if (!id) {
                return (
                    <button type="button" onClick={this.handleAdd}>
                        등록
                    </button>
                );
            }

            // 수정
            if (isEdit) {
                return (
                    <button type="button" onClick={this.handlePatch}>
                        수정 완료
                    </button>
                );
                // 보기
            } else {
                return (
                    <span>
                        <Link to={`/post/${this.id}/edit`}>수정</Link>
                        <Link to="#" onClick={() => this.delete(this.id)}>
                            삭제
                        </Link>
                    </span>
                );
            }
        };

        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault;
                    }}
                >
                    <div>
                        제목:
                        <TitleInput
                            type="text"
                            name="title"
                            value={title}
                            onChange={e => {
                                const { value, name } = e.target;
                                this.setState({
                                    [name]: value,
                                });
                            }}
                            readOnly={isRead}
                        />
                    </div>
                    <div>
                        본문:
                        <Content
                            rows="10"
                            type="text"
                            name="body"
                            value={body}
                            onChange={e => {
                                const { value, name } = e.target;
                                this.setState({
                                    [name]: value,
                                });
                            }}
                            readOnly={isRead}
                        />
                    </div>
                    <div className="post-button">
                        <Link to="/">맛집 목록</Link>
                        {displayBtns()}
                    </div>
                </form>
            </div>
        );
    };

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        }
        return <div>{this.showPost()}</div>;
    }
}

const mapStateToProps = state => {
    return {
        post: state.post.currentPost,
    };
};

const mapDispatchToProps = dispatch => ({
    asyncGetPost: payload => dispatch(actions.asyncGetPost(payload)),
    deletePost: payload => dispatch(actions.deletePost(payload)),
    patchPost: payload => dispatch(actions.patchPost(payload)),
    asyncPatchPost: payload => dispatch(actions.asyncPatchPost(payload)),
    addPost: payload => dispatch(actions.addPost(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
