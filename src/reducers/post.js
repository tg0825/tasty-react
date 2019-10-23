import * as types from '../actions/ActionTypes';

const initialState = {
    list: [],
};

export default function post(state = initialState, action) {
    switch(action.type) {
        case types.GET_POST_LIST:
            return {
                list: action.payload
            };
        case types.ADD_POST:
            return state;
        default:
            return state;
    }
}