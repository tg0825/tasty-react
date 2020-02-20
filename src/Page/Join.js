import React from 'react';
import PropTypes from 'prop-types';

const Join = () => {
    return (
        <form action="" method="post" className="wrap">
            <div className="input-text">
                <div>id</div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div className="input-text">
                <div>password</div>
                <div>
                    <input type="text" />
                </div>
            </div>

            <div>
                <div>password</div>
                <div>
                    <input type="text" />
                </div>
            </div>

            <div className="input-text">
                <div>name</div>
                <div>
                    <input type="text" />
                </div>
            </div>
        </form>
    );
};

Join.propTypes = {};

export default Join;
