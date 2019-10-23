import React from 'react'
import PropTypes from 'prop-types'
import Listing from './Listing';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Posts extends React.Component {
    componentDidMount() {
        this.props.asyncGetPostList();
    }
    
    render() {
        return (
            <div>
                <Listing
                    posts={this.props.postList}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => ({
  postList: state.post.list
});

const mapDispatchToProps = dispatch => ({
  asyncGetPostList: payload => dispatch(actions.asyncGetPostList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
