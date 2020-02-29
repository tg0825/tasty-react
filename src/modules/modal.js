// shop
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const initialState = {
    items: [],
    selectedItem: {},
};

export const openModal = payload => ({
    type: OPEN_MODAL,
    payload,
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});

// reducer
const modal = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                items: action.payload,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};

export default modal;
