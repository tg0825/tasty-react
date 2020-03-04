import React, { useEffect, useRef, useCallback } from 'react';
import Dialog from 'Ui/dialog';

const withDialog = WrappedComponent => props => {
    const node = useRef();
    const { isShow, handleClickClose, modalData, componentData } = props;
    const { title } = modalData;

    // 자식 요소가 업데이트 될 때 함수가 한번만 실행되도록 한다.
    // useCallback이 없으면 자식 요소가 랜더링 될 때 추가적으로 이벤트가 생성 + 추가 된다.
    const modalClose = useCallback(
        e => {
            // 모달의 자식이면 return
            if (e && node.current.contains(e.target)) {
                return;
            }

            handleClickClose();
            document.removeEventListener('click', modalClose);
        },
        [isShow],
    );

    useEffect(() => {
        if (isShow) {
            document.addEventListener('click', modalClose);
        } else {
            document.removeEventListener('click', modalClose);
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
                    <WrappedComponent
                        modalClose={modalClose}
                        {...componentData}
                    />
                </Dialog.Body>
            </Dialog>
        )
    );
};

export default withDialog;
