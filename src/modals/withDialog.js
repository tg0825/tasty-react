import React from 'react';

const withDialog = () => WrappedComponent => props => {
    return (
        <div>
            <div>
                <div>dialog</div>
                <div>close btn</div>
            </div>
            <div>
                <WrappedComponent {...props} />
            </div>
        </div>
    );
};

export default withDialog;
