import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';

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
        <div>
            <Formik
                initialValues={{
                    id: '',
                    pw: '',
                    pwCk: false,
                    name: '',
                    terms: false,
                }}
                validate={values => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = 'Required';
                    }

                    return errors;
                }}
                onSubmit={({ values, setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="input-text">
                            <div>id</div>
                            <div>
                                <Field type="text" name="id" />
                            </div>
                        </div>
                        <ErrorMessage name="id" component="div" />
                        {errors.id}
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
                        {errors.pw}

                        <div>
                            <div>password</div>
                            <div>
                                <input
                                    name="pwCk"
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

                        <div>
                            <label>
                                <input name="terms" type="checkbox" />
                                동의합니까?
                            </label>
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            전송
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

Join.propTypes = {};

export default Join;
