import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from 'Src/css/theme.js';
import GlobalStyle from 'Style/global-style';
import modules from 'Modules/index';
import { LOGIN } from 'Modules/auth';
import App from 'Src/app.js';

import 'normalize.css';
import './css/index.scss';

const store = createStore(
    modules,
    composeWithDevTools(applyMiddleware(ReduxThunk)),
);

const userInfo = localStorage.getItem('userInfo');
if (userInfo) {
    store.dispatch({
        type: LOGIN,
        payload: {
            userInfo,
            logged: true,
        },
    });
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
