import * as types from './ActionTypes';
import axios from 'axios';

export const getPostList = (payload) => {
    return {
        type: types.GET_POST_LIST,
        payload
    };
}

export const getPost = (payload) => {
    return {
        type: types.GET_POST,
        payload
    };
}

export const asyncGetPostList = () => (dispatch, getState) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then( res => {
            dispatch(getPostList(res.data));
            return res.data;
        })
}

export const asyncGetPost = (payload) => (dispatch, getState) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
        .then(res => {
            dispatch(getPost(res.data));
            return res.data;
        })
}

export const createPost = (payload) => (dispatch, getState) => {
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

export const deletePost = () => (dispatch, getState) => {
    return {
        type: types.DELETE_POST
    };
}
