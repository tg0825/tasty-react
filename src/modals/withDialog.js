import React from 'react';

const withDialog = WrappedComponent => props => {
    const { modalData, componentData } = props;
    const { title } = modalData;
    return (
        <div>
            <div>
                <div>{title}</div>
                <div>close btn</div>
            </div>
            <div>
                <WrappedComponent {...componentData} />
            </div>
        </div>
    );
};

export default withDialog;
