import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import Yup from '../localization';

const Join = () => {
    const formData = {
        id: '',
        pw: '',
        pwCk: '',
        name: '',
        terms: false,
    };

    return (
        <div>
            <Formik
                initialValues={{
                    ...formData,
                }}
                validationSchema={Yup.object({
                    id: Yup.string()
                        .min(3)
                        .max(15)
                        .required(),
                    pw: Yup.string().required(),
                    pwCk: Yup.string()
                        .oneOf([Yup.ref('pw'), null], '비밀번호 확인해주세요.')
                        .required(),
                    name: Yup.string().required(),
                    terms: Yup.bool().oneOf([true], '채크해주세요.'),
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
                            <div>아이디</div>
                            <div>
                                <Field type="text" name="id" />
                            </div>
                        </div>
                        <ErrorMessage name="id" component="div" />

                        <div className="input-text">
                            <div>비밀번호</div>
                            <div>
                                <Field type="password" name="pw" />
                            </div>
                        </div>
                        <ErrorMessage name="pw" component="div" />

                        <div className="input-text">
                            <div>비밀번호 확인</div>
                            <div>
                                <Field type="text" name="pwCk" />
                            </div>
                        </div>
                        <ErrorMessage name="pwCk" component="div" />

                        <div className="input-text">
                            <div>닉네임</div>
                            <div>
                                <Field type="text" name="name" />
                            </div>
                        </div>
                        <ErrorMessage name="name" component="div" />

                        <div className="input-text">
                            <div>약관</div>
                            <div>
                                <Field name="terms" type="checkbox" />
                                동의합니까?
                            </div>
                        </div>
                        <ErrorMessage name="terms" component="div" />

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
