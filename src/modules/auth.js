// 인증
// import axios from 'axios';

const initialState = {
    logged: false,
    userInfo: {},
};

// Actions
const LOGIN = '/auth/LOGIN';
const LOGOUT = '/auth/LOGOUT';

// Actions Creator
export const login = payload => ({
    type: LOGIN,
    payload,
});

export const logout = () => ({
    type: LOGOUT,
});

// Reducer
const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                logged: true,
            };
        case LOGOUT:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

export default auth;
