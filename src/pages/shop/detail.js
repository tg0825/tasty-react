import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as shopActions from 'Modules/shop';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

import { Helmet } from 'react-helmet';

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

class ShopDetail extends React.Component {
    constructor(props) {
        super(props);
        const { match } = props;
        const { edit } = match.params;
        const isEdit = edit === 'edit' ? true : false;
        this.id = match.params.postId;
        this.state = {
            redirect: false,
            title: '',
            body: '',
            loading: true,
            item: props.item,
            isEdit,
        };
    }

    componentDidMount() {
        const { asyncGetShop } = this.props;

        if (this.id) {
            asyncGetShop({
                id: this.id,
            }).then(() => {
                this.setState({
                    loading: false,
                });
            });
        }
    }

    componentDidUpdate(prevProps) {
        // 전형적인 사용 사례 (props 비교를 잊지 마세요)
        if (this.props.item !== prevProps.item) {
            this.setState({
                ...this.state,
                ...this.props.item.data,
            });
        }
    }

    handleAdd = () => {
        const { title, body } = this.state;
        this.props.postShop({
            title,
            body,
        });
    };

    handlePatch = () => {
        const { title, body } = this.state;
        const { history } = this.props;
        this.props
            .patchShop({
                id: this.id,
                title,
                body,
            })
            .then(() => {
                history.goBack();
            });
    };

    delete = id => {
        if (!confirm('삭제 하시겠습니까?')) return false;
        this.props.deleteShop(id).then(res => {
            alert('삭제 되었습니다.');
            this.setState({
                redirect: true,
            });
        });
    };

    showPost = () => {
        const { id, state } = this;
        const { title, body } = this.state;
        // const { patchShop } = this.props;
        const isRead = !id || state.isEdit ? false : true;

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
            if (state.isEdit) {
                return (
                    <button type="button" onClick={this.handlePatch}>
                        수정 완료
                    </button>
                );
                // 보기
            } else {
                return (
                    <span>
                        <Link to={`/shop/${this.id}/edit`}>수정</Link>
                        <Link to="#" onClick={() => this.delete(this.id)}>
                            삭제
                        </Link>
                    </span>
                );
            }
        };

        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={body.slice(0, 200)} />
                </Helmet>

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
                        <Link to="/shop/list">목록</Link>
                        {displayBtns()}
                    </div>
                </form>
            </div>
        );
    };

    helmet = () => {
        <Helmet>
            <title>title</title>
            <meta name="description" content="desc" />
        </Helmet>;
    };

    render() {
        const { redirect, loading } = this.state;

        if (this.id && loading) {
            return (
                <div>
                    {this.helmet()}
                    <div>loading...</div>
                </div>
            );
        }

        if (redirect) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                {this.helmet()}
                {this.showPost()}
            </div>
        );
    }
}

ShopDetail.propTypes = {
    edit: PropTypes.bool,
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    asyncGetShop: PropTypes.func.isRequired,
    deleteShop: PropTypes.func.isRequired,
    postShop: PropTypes.func.isRequired,
    patchShop: PropTypes.func.isRequired,
    item: PropTypes.object,
    history: PropTypes.object,
};

ShopDetail.defaultProps = {
    edit: false,
};

const mapStateToProps = state => {
    return {
        item: state.shop.item,
    };
};

const mapDispatchToProps = {
    asyncGetShop: shopActions.asyncGetShop,
    postShop: shopActions.asyncPostShop,
    patchShop: shopActions.patchShop,
    deleteShop: shopActions.deleteShop,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail);
