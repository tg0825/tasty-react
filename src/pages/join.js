import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from 'Modules/auth';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Yup from '../localization';

import { getUserById } from 'Service/auth';

const Join = props => {
    const { login } = props;

    const formData = {
        id: 'foo',
        pw: '123',
        pwCk: '123',
        name: 'myFoo',
        terms: true,
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
                        .test(
                            'checkId',
                            '사용할 수 없는 아이디 입니다.',
                            value => {
                                return !getUserById(value);
                            },
                        )
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
                        setSubmitting(false);
                        login(values);
                    }, 500);
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

Join.propTypes = {
    logged: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    logged: state.auth.logged,
});

const mapDispatchToProps = {
    login: authActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Join);
