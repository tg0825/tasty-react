import React, { useEffect, useRef } from 'react';
import Dialog from 'Ui/dialog';

const withDialog = WrappedComponent => props => {
    const node = useRef();
    const { isShow, handleClickClose, modalData, componentData } = props;
    const { title } = modalData;

    const modalClose = e => {
        // 모달의 자식이면 return
        if (e && node.current.contains(e.target)) {
            return;
        }

        document.removeEventListener('click', modalOutsideClick);
        handleClickClose();
    };

    const modalOutsideClick = e => {
        modalClose(e);
    };

    useEffect(() => {
        if (isShow) {
            document.addEventListener('click', modalOutsideClick);
        } else {
            document.removeEventListener('click', modalOutsideClick);
        }
    }, [isShow]);

    return (
        isShow && (
            <Dialog ref={node}>
                <Dialog.Header>
                    <div>{title}</div>
                    <Dialog.P_Option
                        onClick={() => {
                            modalClose();
                        }}
                    >
                        close btn
                    </Dialog.P_Option>
                </Dialog.Header>
                <Dialog.Body>
                    <WrappedComponent {...componentData} />
                </Dialog.Body>
            </Dialog>
        )
    );
};

export default withDialog;
