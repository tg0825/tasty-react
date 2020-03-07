import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import * as shopActions from 'Modules/shop';
import Pagination from 'Comp/pagination';

import Loader from 'Comp/loader';

class ShopList extends React.Component {
    constructor(props) {
        super(props);
        this.page = 1;
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        const { asyncGetShops } = this.props;

        asyncGetShops().then(() => {
            this.setState({
                loading: false,
            });
        });
    }

    renderList = list => (
        <div>
            {list.map(({ id, title }, idx) => (
                <div key={idx}>
                    <Link to={`/shop/${id}`}>
                        {id}:{title}
                    </Link>
                </div>
            ))}
        </div>
    );

    render() {
        const { items, asyncGetShops } = this.props;
        const { loading } = this.state;

        const helmet = () => {
            return (
                <Helmet>
                    <title>{`${this.page.toString()} 페이지`}</title>
                    <meta name="description" content="목록" />
                </Helmet>
            );
        };

        return !items.data ? (
            <Loader />
        ) : (
            <div>
                {loading && <Loader />}
                {helmet()}
                <div className="post-list">{this.renderList(items.data)}</div>
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
