// 인증
// import axios from 'axios';

const initialState = {
    logged: false,
    userInfo: {},
};

// Actions
const LOGIN = '/auth/LOGIN';
const LOGOUT = '/auth/LOGOUT';

class UserInfo {
    constructor(values) {
        this.id = values.id;
        this.pw = values.pw;
        this.name = values.name;
    }
}

// Actions Creator
export const login = values => {
    const userInfo = new UserInfo(values);
    const userList = JSON.parse(localStorage.getItem('userList')) || [];
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('userList', JSON.stringify([...userList, userInfo]));
    return {
        type: LOGIN,
        userInfo,
    };
};

export const logout = () => {
    localStorage.removeItem('userInfo');
    return {
        type: LOGOUT,
    };
};

// Reducer
const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userInfo: action.userInfo,
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
