import React from 'react'
import './style.scss';
import Counter from './components/Counter';

import axios from 'axios'; 

class Root extends React.Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => console.log(res.data));
    }
    
    render () {
        return (
            <div>
                <Counter/>
            </div>
        )
    }
}

export default Root;