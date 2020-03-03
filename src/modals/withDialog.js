import React from 'react';
import Dialog from 'Ui/dialog';

const withDialog = WrappedComponent => props => {
    const { isShow, modalData, componentData } = props;
    const { title } = modalData;

    if (!isShow) return null;

    return (
        <Dialog>
            <Dialog.Header>
                <div>{title}</div>
                <Dialog.P_Option>close btn</Dialog.P_Option>
            </Dialog.Header>
            <Dialog.Body>
                <WrappedComponent {...componentData} />
            </Dialog.Body>
        </Dialog>
    );
};

export default withDialog;
