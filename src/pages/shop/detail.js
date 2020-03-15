import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as shopActions from 'Modules/shop';
import * as modalActions from 'Modules/modal';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import CardVList from 'Src/components/card-v-list';
import ImageZoom from 'Src/views/image-zoom';
import withDialog from 'Src/modals/withDialog';

const Modal = withDialog(ImageZoom);

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
        this.imageSrc = '';
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

    /**
     * 카드 이미지 클릭 핸들러
     */
    handleClickImage = e => {
        this.imageSrc = e.target.src;
        this.props.openModal('imageModal');
    };

    showPost = () => {
        const { id, state } = this;
        const { title, body } = this.state;
        // const { patchShop } = this.props;
        const isRead = !id || state.isEdit ? false : true;

        const renderBtns = () => {
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
            }

            // 보기
            if (state.logged) {
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
                        <div>
                            <img src="/images/image0.jpg" alt="" />
                        </div>
                    </div>

                    <div>star component</div>

                    <div>일식</div>

                    <div>
                        <div>가게 이름</div>
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
                        <div>설명</div>
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

                    <div>
                        <div>메뉴</div>
                        <CardVList
                            handleClickImage={this.handleClickImage}
                            items={[
                                {
                                    imgSrc: '/images/image0.jpg',
                                    name: '초밥',
                                    desc: '신선한 ㅇㅇ로 한 초밥',
                                    price: '12,000',
                                },
                                {
                                    imgSrc: '/images/image1.jpg',
                                    name: '우동',
                                    desc: '국물이 시원한 우동',
                                    price: '8000',
                                },
                                {
                                    imgSrc: '/images/image2.jpg',
                                    name: '회',
                                    desc: '국물이 시원한 우동',
                                    price: '8000',
                                },
                            ]}
                        />
                    </div>

                    <div>
                        <div>후기</div>
                    </div>

                    <div className="post-button">
                        <Link to="/shop/list">목록</Link>
                        {renderBtns()}
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
        const { modalList, closeModal } = this.props;

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
                <Modal
                    isShow={modalList.imageModal}
                    handleClickClose={() => {
                        closeModal('imageModal');
                    }}
                    modalData={{
                        title: '확대보기',
                    }}
                    componentData={{
                        imageSrc: this.imageSrc,
                    }}
                />
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
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    item: PropTypes.object,
    history: PropTypes.object,
    modalList: PropTypes.object,
};

ShopDetail.defaultProps = {
    edit: false,
};

const mapStateToProps = state => {
    return {
        item: state.shop.item,
        logged: state.auth.logged,
        modalList: state.modal,
    };
};

const mapDispatchToProps = {
    asyncGetShop: shopActions.asyncGetShop,
    postShop: shopActions.asyncPostShop,
    patchShop: shopActions.patchShop,
    deleteShop: shopActions.deleteShop,
    openModal: modalActions.openModal,
    closeModal: modalActions.closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail);
