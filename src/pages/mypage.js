import React from 'react';
// import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Yup from '../localization';

import Foo from 'Src/views/foo';
import withDialog from 'Src/modals/withDialog';

const Modal = withDialog(Foo);

const MyPage = () => {
    const formData = {
        name: 'username',
    };

    const modalData = {
        title: 'modal title',
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
                                <img src="/images/image.jpg" alt="" />
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
            <Modal
                modalData={modalData}
                componentData={{
                    name: formData.name,
                }}
            />
        </div>
    );
};

MyPage.propTypes = {};

export default MyPage;
