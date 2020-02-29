import axios from 'axios';

// shop
const GET_SHOPS = 'GET_SHOPS';
const GET_SHOP = 'GET_SHOP';
const POST_SHOP = 'POST_SHOP';
const PATCH_SHOP = 'PATCH_SHOP';
// const DELETE_SHOP = 'DELETE_SHOP';

const initialState = {
    items: {},
    selectedItem: {},
};

export const getShops = payload => ({
    type: GET_SHOPS,
    payload,
});

export const getShop = payload => ({
    type: GET_SHOP,
    payload,
});

export const postShop = () => ({
    type: POST_SHOP,
});

export const patchShop = payload => dispatch =>
    axios
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
            console.log(res);

            dispatch({
                type: PATCH_SHOP,
                payload,
            });
        });

export const deleteShop = id => () =>
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
        console.log(res);
        alert('done');
    });

export const asyncGetShops = (payload = {}) => dispatch => {
    console.log(payload);

    const params = Object.assign(
        {
            _page: 1,
        },
        payload,
    );

    return axios
        .get(
            `https://jsonplaceholder.typicode.com/posts${
                params.id ? '/' + params.id : ''
            }`,
            {
                params: params,
            },
        )
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

// reducer
const shop = (state = initialState, action) => {
    switch (action.type) {
        case GET_SHOPS:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};

export default shop;
