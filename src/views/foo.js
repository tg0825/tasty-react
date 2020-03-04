import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Foo = props => {
    const { count, setCount, modalClose, handleClick } = props;

    useEffect(() => {
        if (count >= 5) {
            modalClose();
            setCount(0);
        }
    }, [count]);

    return (
        <div>
            <div>{props.name}</div>
            <div>
                <button
                    onClick={() => {
                        // console.log(e);
                        handleClick();
                    }}
                >
                    click me (max5)
                </button>
            </div>
        </div>
    );
};

Foo.propTypes = {
    name: PropTypes.string,
    count: PropTypes.number,
    handleClick: PropTypes.func,
    modalClose: PropTypes.func,
};

export default Foo;
