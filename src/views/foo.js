import React from 'react';

const Foo = props => {
    return (
        <div>
            <div>{props.name}</div>
            <div>
                <button onClick={props.handleClick}>click me</button>
            </div>
        </div>
    );
};

export default Foo;
