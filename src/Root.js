import React from 'react'
import './style.scss';
import Counter from './components/Counter';

class Root extends React.Component {
    render () {
        return (
            <div>
                <Counter/>
            </div>
        )
    }
}

export default Root;