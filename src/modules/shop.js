// 음식점 모듈
import axios from 'axios';
import { api } from './config';

const initialState = {
    items: {},
    item: {},
};

// Actions
const GET = '/shops/GET';
const GET_ITEM = '/shops/GET_ITEM';
const POST = '/shops/POST';
const PATCH = '/shops/PATCH';
// const DELETE_SHOP = 'DELETE_SHOP';

// Actions Creator
export const getShop = payload => ({
    type: GET_ITEM,
    payload,
});

export const getShops = payload => ({
    type: GET,
    payload,
});

export const postShop = () => ({
    type: POST,
});

export const patchShop = payload => dispatch =>
    axios
        .patch(`${api.domain}/posts/${payload.id}`, JSON.stringify(payload), {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => {
            dispatch({
                type: PATCH,
                payload: res.data,
            });
        });

export const deleteShop = id => () =>
    axios.get(`${api.domain}/posts/${id}`).then(res => {
        alert('done');
    });

export const asyncGetShop = ({ id }) => dispatch =>
    axios.get(`${api.domain}/posts/${id}`).then(res => {
        dispatch(getShop(res));
        return res;
    });

export const asyncGetShops = (payload = {}) => dispatch => {
    const params = Object.assign(
        {
            _page: 1,
        },
        payload,
    );

    return axios
        .get(`${api.domain}/posts${params.id ? '/' + params.id : ''}`, {
            params: params,
        })
        .then(res => {
            dispatch(getShops(res));
            return res;
        });
};

export const asyncPostShop = () => dispatch => {
    setTimeout(() => {
        dispatch(postShop());
    }, 1000);
};

// Reducer
const shop = (state = initialState, action) => {
    switch (action.type) {
        case GET:
            return {
                ...state,
                items: action.payload,
            };
        case GET_ITEM:
            return {
                ...state,
                item: action.payload,
            };
        case PATCH:
            return {
                ...state,
                item: action.payload,
            };
        default:
            return state;
    }
};

export default shop;
