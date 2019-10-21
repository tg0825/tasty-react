import * as types from './ActionTypes';
import axios from 'axios';

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

export function getPost(payload) {
    return {
        type: types.GET_POST,
        payload
    };
}

export function asyncGetPost() {
    return (dispatch, getState) => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then( res => {
            dispatch(getPost(res.data));
            return res.data;
        })
    }
}

export const createPost = (payload) => (dispatch, getStage) => {
    axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        JSON.stringify(payload),
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(res => {
            alert('성공');
            dispatch({
                type: types.ADD_POST,
                payload: res
            });
        })
}

export function delete_post() {
    return {
        type: types.DELETE_POST
    };
}
