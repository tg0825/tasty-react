// shop
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// {
//     imageModal: true,
//     fooModal: false
//     barModal: false
// }

const initialState = {};

export const openModal = payload => ({
    type: OPEN_MODAL,
    payload,
});

export const closeModal = payload => ({
    type: CLOSE_MODAL,
    payload,
});

// reducer
const modal = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                [action.payload]: true,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                [action.payload]: true,
            };
        default:
            return state;
    }
};

export default modal;
