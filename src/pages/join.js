import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from 'Modules/auth';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Yup from '../localization';

class UserInfo {
    constructor(values) {
        this.id = values.id;
        this.pw = values.pw;
        this.name = values.name;
    }
}

const joinLogic = values => {
    // 값 채크
    // 기존 유저와 아이디 닉네임 매칭 여부
    // 완료시 로컬스토리지에 아이디 저장
    // 로그인 여부 및 데이터 저장
    // 메인 페이지로 이동
    const userInfo = new UserInfo(values);
    const userList = JSON.parse(localStorage.getItem('userList')) || [];

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('userList', JSON.stringify([...userList, userInfo]));

    return true;
};

const Join = props => {
    const { logged, login } = props;
    console.log(logged);

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
                        const result = joinLogic(values);
                        setSubmitting(false);
                        if (result) {
                            login();
                        }
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
