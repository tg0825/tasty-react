import React, { useEffect } from 'react';
import Dialog from 'Ui/dialog';

const withDialog = WrappedComponent => props => {
    const { isShow, handleClickClose, modalData, componentData } = props;
    const { title } = modalData;

    const modalClose = () => {
        document.removeEventListener('click', modalOutsideClick);
        handleClickClose();
    };

    const modalOutsideClick = () => {
        modalClose();
    };

    useEffect(() => {
        if (isShow) {
            console.log('on');
            document.addEventListener('click', modalOutsideClick);
        } else {
            console.log('off');
            document.removeEventListener('click', modalOutsideClick);
        }
    }, [isShow]);

    // useEffect(() => {
    //     console.log('mount');
    // }, []);

    // console.log('run');

    return (
        isShow && (
            <Dialog>
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
