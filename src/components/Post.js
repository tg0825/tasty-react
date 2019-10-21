import React from 'react'
import {Link} from 'react-router-dom';

class Post extends React.Component {
    render() {
        const {id, title} = this.props.info;
        
        return (
            <div>
                <Link to={`/post/${id}`}> 
                    {id}:
                    {title}
                </Link>
            </div>
        )
    }
}

export default Post;