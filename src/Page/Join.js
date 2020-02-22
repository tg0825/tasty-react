import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Join = () => {
    const [formData, setFormData] = useState({});

    /**
     * input change handler
     */
    const handleChange = e => {
        const { name, value } = e.currentTarget;
        setFormData({
            ...formData,
            [name]: value,
        });

        console.log(formData);
    };

    /**
     * 전송
     */
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <form
            action=""
            method="post"
            className="wrap"
            onSubmit={e => handleSubmit(e)}
        >
            <div className="input-text">
                <div>id</div>
                <div>
                    <input
                        name="id"
                        type="text"
                        onChange={e => handleChange(e)}
                    />
                </div>
            </div>
            <div className="input-text">
                <div>password</div>
                <div>
                    <input
                        name="pw"
                        type="password"
                        onChange={e => handleChange(e)}
                    />
                </div>
            </div>

            <div>
                <div>password</div>
                <div>
                    <input
                        name="pw2"
                        type="password"
                        onChange={e => handleChange(e)}
                    />
                </div>
            </div>

            <div className="input-text">
                <div>name</div>
                <div>
                    <input
                        name="name"
                        type="text"
                        onChange={e => handleChange(e)}
                    />
                </div>
            </div>
            <button type="submit">전송</button>
        </form>
    );
};

Join.propTypes = {};

export default Join;
