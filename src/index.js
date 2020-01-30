import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';
import './autoload.scss';

import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

import Posts from 'Comp/Posts';
import SinglePostRedux from 'Comp/SinglePostRedux';

import App from './App';

const routes = [
    {
        id: 'main',
        name: '메인',
        path: '/',
        component: Posts
    },
    {
        id: 'create',
        name: '쓰기',
        path: '/create',
        component: SinglePostRedux
    },
    {
        id: 'view',
        name: '상세',
        path: '/post/:postId',
        component: SinglePostRedux
    },
    {
        id: 'edit',
        name: '수정',
        path: '/post/:postId/edit',
        component: SinglePostRedux
    }
];

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);