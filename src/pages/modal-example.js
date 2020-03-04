import React, { useState } from 'react';

// import PropTypes from 'prop-types';

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

    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
    };

    /**
     * 모달 토글 버튼 클릭 핸들러
     */
    const handleClickModalToggle = () => {
        setIsShow(true);
    };

    return (
        <div>
            {count}

            <Modal
                isShow={isShow}
                handleClickClose={() => {
                    setIsShow(false);
                }}
                modalData={modalData}
                componentData={{
                    name: formData.name,
                    count,
                    setCount,
                    handleClick,
                }}
            />
            <button onClick={() => handleClickModalToggle()}>modal open</button>
        </div>
    );
};

MyPage.propTypes = {};

export default MyPage;
