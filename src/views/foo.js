import React from 'react';
import PropTypes from 'prop-types';

const Foo = props => {
    return (
        <div>
            <div>{props.name}</div>
            <div>
                <button
                    onClick={() => {
                        props.handleClick();
                    }}
                >
                    click me
                </button>
            </div>
        </div>
    );
};

Foo.propTypes = {
    name: PropTypes.string,
    handleClick: PropTypes.func,
};

export default Foo;
