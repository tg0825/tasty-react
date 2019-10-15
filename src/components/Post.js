import React from 'react'
import {Link} from 'react-router-dom';

class Post extends React.Component {
    confirm = () => {
        const {id} = this.props.info;
        
        if (!confirm('delete?')) return false;
        
        this.props.deletePost(id)
        .then((res)=>{
            console.log(res);
            alert('success');
        });
    }
    
    render() {
        const {id, title} = this.props.info;
        
        return (
            <div>
                <div>
                    {id}
                </div>
                <div>
                    {title}
                </div>
                <div className="post-button">
                    <ul>
                        <li><Link to={`/post/${id}`}> Show </Link></li>
                        <li><Link to={`/edit/${id}`}> Edit </Link></li>
                        <li><Link to="#" onClick={this.confirm} className="btn btn-danger">Delete</Link></li>
                    </ul>
                </div> 
            </div>
        )
    }
}

export default Post;