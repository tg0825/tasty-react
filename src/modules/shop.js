import axios from 'axios';

// shop
const GET_SHOPS = 'GET_SHOPS';
const POST_SHOP = 'POST_SHOP';

const initialState = {
    items: [],
    selectedItem: {},
};

export const getShops = payload => ({
    type: GET_SHOPS,
    payload,
});

export const postShop = () => ({
    type: POST_SHOP,
});

export const asyncGetShops = () => dispatch => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
        dispatch(getShops(res.data));
        return res.data;
    });
};

export const asyncPostShops = () => dispatch => {
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
