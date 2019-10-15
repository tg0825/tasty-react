import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
    authorRef = React.createRef();
    titleRef = React.createRef();
    
    createPost = (e) => {
        e.preventDefault();
 
        const post = {
            author: this.authorRef.current.value,
            title: this.titleRef.current.value,
        }
 
        this.props.createPost(post);
    }
    
    render () {
        return (
            <form onSubmit={this.createPost}>
                <div>
                    title
                    <input 
                        ref={this.titleRef}
                        type="text"/>
                </div>
                <div>
                    author
                    <input 
                        ref={this.titleRef}
                        type="text"/>
                </div>
                <button type="submit">
                    create
                </button>
            </form>
        )
    }
}

export default Form;