import * as types from './action-types';
import axios from 'axios';

export const getPostList = payload => {
    return {
        type: types.GET_POST_LIST,
        payload,
    };
};

export const asyncGetPostList = () => (dispatch, getState) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
        dispatch(getPostList(res.data));
        return res.data;
    });
};

export const getPost = payload => {
    return {
        type: types.GET_POST,
        payload,
    };
};

export const asyncGetPost = payload => (dispatch, getState) => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
        .then(res => {
            dispatch(getPost(res.data));
            return res.data;
        });
};

export const patchPost = payload => {
    return {
        type: types.PATCH_POST,
        payload,
    };
};

export const asyncPatchPost = payload => (dispatch, getState) => {
    return axios
        .patch(
            `https://jsonplaceholder.typicode.com/posts/${payload.id}`,
            JSON.stringify(payload),
            {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            },
        )
        .then(res => {
            alert('수정 완료');
            dispatch(patchPost(res.data));
            return res.data;
        });
};

export const addPost = payload => (dispatch, getState) => {
    axios
        .post(
            `https://jsonplaceholder.typicode.com/posts`,
            JSON.stringify(payload),
            {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            },
        )
        .then(res => {
            alert('성공');
            dispatch({
                type: types.ADD_POST,
                payload: res.data,
            });
        });
};

export const deletePost = id => (dispatch, getState) => {
    return axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if (res.status === 200) {
                dispatch({
                    type: types.DELETE_POST,
                    payload: res,
                });
            }
            return res;
        });
};
