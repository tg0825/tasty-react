import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import * as shopActions from 'Modules/shop';
import CardList from 'Comp/card-list';
import Pagination from 'Comp/pagination';
import Loader from 'Comp/loader';

const EmptyTable = styled.div`
    height: 300px;
`;

class ShopList extends React.Component {
    constructor(props) {
        super(props);
        this.page = 1;
        this.state = {
            loading: true,
            init: true,
        };
    }

    componentDidMount() {
        const { asyncGetShops } = this.props;

        asyncGetShops().then(() => {
            this.setState({
                loading: false,
                init: false,
            });
        });
    }

    render() {
        const { items, asyncGetShops } = this.props;
        const { loading, init } = this.state;

        const helmet = () => {
            return (
                <Helmet>
                    <title>{`${this.page.toString()} 페이지`}</title>
                    <meta name="description" content="목록" />
                </Helmet>
            );
        };

        return init ? (
            <EmptyTable>
                <Loader />
                로딩중...
            </EmptyTable>
        ) : (
            <div>
                {loading && <Loader />}
                {helmet()}
                <CardList loading={loading} init={init} items={items} />
                <Pagination
                    paginationData={items}
                    onClickPageBtn={pageData => {
                        this.page = pageData._page;
                        this.setState({
                            loading: true,
                        });
                        asyncGetShops(Object.assign({}, pageData)).then(() => {
                            this.setState({
                                loading: false,
                            });
                        });
                    }}
                />
            </div>
        );
    }
}

ShopList.propTypes = {
    asyncGetShops: PropTypes.func.isRequired,
    asyncGetShop: PropTypes.func.isRequired,
    items: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
    items: state.shop.items,
});

const mapDispatchToProps = {
    asyncGetShops: shopActions.asyncGetShops,
    asyncGetShop: shopActions.asyncGetShop,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
