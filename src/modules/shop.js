import axios from 'axios';

const initialState = {
    items: {},
    selectedItem: {},
};

// Actions
const GET = '/shops/GET';
const POST = '/shops/POST';
const PATCH = '/shops/PATCH';
// const DELETE_SHOP = 'DELETE_SHOP';

// Actions Creator
export const getShops = payload => ({
    type: GET,
    payload,
});

export const postShop = () => ({
    type: POST,
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
                type: PATCH,
                payload,
            });
        });

export const deleteShop = id => () =>
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
        console.log(res);
        alert('done');
    });

export const asyncGetShops = (payload = {}) => dispatch => {
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

// Reducer
const shop = (state = initialState, action) => {
    switch (action.type) {
        case GET:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};

export default shop;
