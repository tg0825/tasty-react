import React from 'react'
import PropTypes from 'prop-types'

class SinglePost extends React.Component {
    showPost = (props) => {
        if (!props.post) return null;
        
        const {title, author} = this.props.post;
        
        return (
            <div>
                <div>
                    {title}
                </div>
                <div>
                    {author}
                </div>
            </div>
        );
    }
    
    render() {
        return (
            <div>
                {this.showPost(this.props)}
            </div>
        )
    }
}

export default SinglePost;