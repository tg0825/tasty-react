import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import * as actions from '../actions';

class Create extends React.Component {
    constructor(props) {
        super(props);
    }
    
    bodyRef = React.createRef();
    titleRef = React.createRef();
    
    createPost = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
 
        const post = {
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value,
        }
 
        dispatch(actions.createPost(post));
    }
    
    render () {
        return (
            <form onSubmit={this.createPost}>
                <div>
                    제목
                    <input 
                        ref={this.titleRef}
                        type="text"/>
                </div>
                <div>
                    내용
                    <input 
                        ref={this.bodyRef}
                        type="text"/>
                </div>
                <button type="submit">
                    create
                </button>
            </form>
        )
    }
}

export default connect()(Create);
