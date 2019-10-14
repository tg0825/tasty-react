import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    };
}

export function incrementAsync() {
    return (dispatch, getStage) => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    }
}

export function decrementAsync() {
    return (dispatch, getStage) => {
        setTimeout(() => {
            dispatch(decrement());
        }, 1000);
    }
}
