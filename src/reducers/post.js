import * as types from '../actions/ActionTypes';

const initialState = {
    list: [],
};

export default function post(state = initialState, action) {
    switch(action.type) {
        case types.GET_POST:
            return {
                list: action.payload
            };
        default:
            return state;
    }
}