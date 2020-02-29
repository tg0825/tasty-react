import React, { useEffect, useState } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
// import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

/**
 * 리스트 호출 훅
 * query string 변경시 리스트 호출 함
 * 예) page=1 >> page=2 >> 2번 페이지 호출
 * @param {function} fetchFunc query string 변경시 호출될 함수
 */
// export const FetchList = (fetchFunc, isLectureList = false) => {
//     if (!fetchFunc || typeof fetchFunc !== 'function') {
//         console.log('매개변수를 확인해 주세요.');
//         return false;
//     }
//     // query string
//     const [qs, setQs] = useState('');
//     const location = useLocation();
//     const { search } = location;
//     let params = {};
//     new URLSearchParams(search).forEach((value, key) => {
//         params[key] = value;
//     });

//     useEffect(() => {
//         setQs(search);
//     }, [search]);

//     if (isLectureList) {
//         params = { status: isLectureList };
//     }

//     return new Promise((resolve, reject) => {
//         useEffect(() => {
//             const pms = fetchFunc({
//                 params,
//             });

//             // if promise object
//             if (
//                 typeof pms !== 'undefined' &&
//                 pms.then &&
//                 typeof pms.then !== 'function'
//             ) {
//                 pms.then(res => {
//                     resolve(res);
//                 }).catch(err => {
//                     reject(err);
//                 });
//             }
//         }, [qs]);
//     });
// };

const PageBtn = styled.button`
    color: ${props => props.theme.grayScale02};
    box-sizing: border-box;
    display: inline-block;
    min-width: 32px;
    padding: 2px;
    margin: 0 2px;

    &.active {
        padding: 1px;
        border: 1px solid ${props => props.theme.pointColor01};
        color: ${props => props.theme.pointColor01};
    }
`;

const PaginationUi = styled.div`
    margin-top: 20px;
    text-align: center;
`;

const Pagination = ({ paginationData, onClickPageBtn }) => {
    // const history = useHistory();
    // const { location } = history;
    if (!paginationData) return null;
    console.log(paginationData);

    const { headers, data } = paginationData;
    // const {
    // 한 페이지에 보여질 아이템 개수 (임시값 2)
    // page_size: pageSize = 2,
    // 전체 페이지 수량
    // total_size = headers['x-total-count'],
    // 사용안함: 항목 전체 수량
    // items_size: itemsSize,
    // 현재 페이지 넘버
    // current_page: currentPage,
    // 한번에 보여질 페이지네이션 버튼 개수
    // perBlock = 10,
    // } = pagination;

    const [currentPage, setCurrentPage] = useState(1);

    const perBlock = 10;
    const totalPage = headers['x-total-count'] / perBlock;

    const sp = new URLSearchParams(location.search);

    // 중복값 제거
    // sp.delete('page');
    // sp.delete('page_size');
    // 한번에 보여질 이이템 개수
    // sp.append('page_size', pageSize);
    sp.delete('__page');

    // 현재 페이지 블럭 넘버
    const currentBlock = Math.ceil(currentPage / perBlock);
    // 현재 페이지 시작 번호
    const startPage = (currentBlock - 1) * perBlock + 1;
    // 끝 번호
    let endPage = startPage + perBlock - 1;
    // endPage는 totalPage 보다 클 수 없음
    if (endPage > totalPage) {
        endPage = totalPage;
    }

    const handleClickPageBtn = i => {
        setCurrentPage(i);
        onClickPageBtn({
            _page: i,
        });
    };

    console.log(currentPage);

    const renderPageLinkBtn = () => {
        const links = [];
        for (let i = startPage; i <= endPage; i += 1) {
            links.push(
                <PageBtn
                    className={currentPage === i && 'active'}
                    key={i}
                    onClick={() => {
                        handleClickPageBtn(i);
                    }}
                >
                    {i}
                </PageBtn>,
            );
        }
        return links;
    };

    return (
        <PaginationUi>
            {currentPage > 1 && (
                <>
                    <PageBtn
                        onClick={() => {
                            handleClickPageBtn(1);
                        }}
                        type="button"
                    >
                        &lt;
                    </PageBtn>
                    <PageBtn
                        onClick={() => {
                            handleClickPageBtn(currentPage - 1);
                        }}
                        type="button"
                    >
                        &lt; &lt;
                    </PageBtn>
                </>
            )}

            {renderPageLinkBtn()}

            {currentPage < totalPage && (
                <>
                    <PageBtn
                        onClick={() => {
                            handleClickPageBtn(currentPage + 1);
                        }}
                        type="button"
                    >
                        &gt;
                    </PageBtn>
                    <PageBtn
                        onClick={() => {
                            handleClickPageBtn(totalPage);
                        }}
                        type="button"
                    >
                        &gt; &gt;
                    </PageBtn>
                </>
            )}
        </PaginationUi>
    );
};

export default Pagination;

Pagination.propTypes = {
    pagination: PropTypes.objectOf(PropTypes.any),
};

Pagination.defaultProps = {
    pagination: {},
};
