import * as types from '../actions/ActionTypes';

const initialState = {
    list: [],
    currentPost: {},
};

export default function post(state = initialState, action) {
    switch (action.type) {
        case types.GET_POST:
            return {
                ...state,
                currentPost: action.payload,
            };
        case types.GET_POST_LIST:
            return {
                list: action.payload,
            };
        case types.ADD_POST:
            return state;
        case types.DELETE_POST:
            return state;
        case types.PATCH_POST:
            return {
                ...state,
                currentPost: action.paylod,
            };
        default:
            return state;
    }
}
