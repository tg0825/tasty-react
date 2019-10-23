import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link} from 'react-router-dom';

class Posts extends React.Component {
    componentDidMount() {
        this.props.asyncGetPostList();
    }
    
    showPosts = (list) => (
        <div>
            {
                list.map(({id, title}, idx) => (
                    <div key={idx}>
                        <Link to={`/post/${id}`}> 
                            {id}:
                            {title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
            
    render() {
        const list = this.props.list;
        return (
            <div>
                <div className="post-list">
                    {list.length === 0 ? null : this.showPosts(list)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  list: state.post.list
});

const mapDispatchToProps = dispatch => ({
  asyncGetPostList: () => dispatch(actions.asyncGetPostList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
