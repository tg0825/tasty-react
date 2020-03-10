import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from 'Modules/auth';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Yup from '../localization';

let currentUser = null;

const getUserById = id => {
    const ls = JSON.parse(localStorage.getItem('userList'));
    return ls.some(user => {
        if (user.id === id) {
            currentUser = user;
            return true;
        }
        return false;
    });
};

const checkPw = (user, pw) => {
    return user.pw === pw;
};

const Login = props => {
    const { login } = props;

    const formData = {
        id: 'tg0825',
        pw: '111',
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
                        .max(20)
                        .required(),
                    pw: Yup.string().required(),
                })}
                onSubmit={(values, { setFieldError, setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        if (!getUserById(values.id)) {
                            setFieldError('id', '아이디를 확인해주세요.');
                            setSubmitting(false);

                            return false;
                        }
                        if (!checkPw(currentUser, values.pw)) {
                            setFieldError('pw', '비밀번호를 확인해주세요.');
                            return false;
                        }

                        login();
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

                        <button type="submit" disabled={isSubmitting}>
                            전송
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

Login.propTypes = {
    logged: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    logged: state.auth.logged,
});

const mapDispatchToProps = {
    login: authActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
