import React from 'react';
// import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Yup from '../localization';

const MyPage = () => {
    const formData = {
        name: 'username',
    };

    return (
        <div>
            <Formik
                initialValues={{
                    ...formData,
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required(),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form autoComplete="off">
                        <div className="input-text">
                            <div>
                                <img src="/images/image0.jpg" alt="" />
                            </div>
                        </div>
                        <div className="input-text">
                            <div>닉네임</div>
                            <div>
                                <Field type="text" name="name" />
                            </div>
                        </div>
                        <ErrorMessage name="name" component="div" />

                        <button type="submit" disabled={isSubmitting}>
                            저장
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

MyPage.propTypes = {};

export default MyPage;
