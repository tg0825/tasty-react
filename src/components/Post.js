import React from 'react'
import {Link} from 'react-router-dom';

class Post extends React.Component {
    confirm = () => {
        const {id} = this.props.info;
        
        if (!confirm('delete?')) return false;
        
        this.props.deletePost(id)
        .thne((res)=>{
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
            </div>
        )
    }
}

export default Post;