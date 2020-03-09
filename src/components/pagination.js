import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StPage from 'Style/pagination';

const Pagination = ({ paginationData, onClickPageBtn }) => {
    if (!paginationData) return null;

    const { headers } = paginationData;

    // render html
    const [result, setResult] = useState(null);
    // 현재 페이지
    const [currentPage, setCurrentPage] = useState(1);
    // 페이지네이션 버튼 개수
    const perBlock = 5;
    // 아이템 개수
    const perItem = 10;
    // 전체 페이지 (전체 개수 / 한번에 보여질 아이템 개수)
    const totalPage = headers['x-total-count'] / perItem;
    // 현재 페이지 블럭 넘버
    const currentBlock = Math.ceil(currentPage / perBlock);
    // 현재 페이지 시작 블럭
    const startPage = (currentBlock - 1) * perBlock + 1;
    // 페이지 블럭 끝 번호
    let endPage = startPage + perBlock - 1;
    // endPage는 totalPage 보다 클 수 없음
    if (endPage > totalPage) {
        endPage = totalPage;
    }

    const firstPage = currentPage === 1;
    const lastPage = currentPage === totalPage;

    useEffect(() => {
        setResult(render());
    }, [currentPage]);

    const handleClickPageBtn = i => {
        setCurrentPage(i);
        onClickPageBtn({
            _page: i,
        });
    };

    const renderPageLinkBtn = () => {
        const links = [];
        for (let i = startPage; i <= endPage; i += 1) {
            links.push(
                <StPage.Btn
                    className={currentPage === i && 'active'}
                    key={i}
                    onClick={() => {
                        handleClickPageBtn(i);
                    }}
                >
                    {i}
                </StPage.Btn>,
            );
        }
        return links;
    };

    const render = () => {
        return (
            <StPage>
                <StPage.Btn
                    onClick={() => {
                        handleClickPageBtn(1);
                    }}
                    type="button"
                    disabled={firstPage}
                >
                    &lt; &lt;
                </StPage.Btn>
                <StPage.Btn
                    onClick={() => {
                        handleClickPageBtn(currentPage - 1);
                    }}
                    disabled={firstPage}
                    type="button"
                >
                    &lt;
                </StPage.Btn>

                {renderPageLinkBtn()}

                <StPage.Btn
                    onClick={() => {
                        handleClickPageBtn(currentPage + 1);
                    }}
                    disabled={lastPage}
                    type="button"
                >
                    &gt;
                </StPage.Btn>
                <StPage.Btn
                    onClick={() => {
                        handleClickPageBtn(totalPage);
                    }}
                    disabled={lastPage}
                    type="button"
                >
                    &gt; &gt;
                </StPage.Btn>
            </StPage>
        );
    };

    return result;
};

export default Pagination;

Pagination.propTypes = {
    pagination: PropTypes.objectOf(PropTypes.any),
};

Pagination.defaultProps = {
    pagination: {},
};
