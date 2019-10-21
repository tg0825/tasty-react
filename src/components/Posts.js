import React from 'react'
import PropTypes from 'prop-types'
import Listing from './Listing';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Posts extends React.Component {
    componentDidMount() {
        this.props.asyncGetPost();
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
  asyncGetPost: payload => dispatch(actions.asyncGetPost(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
