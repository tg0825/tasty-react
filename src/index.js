import React from 'react';
import ReactDom from 'react-dom';

import 'normalize.css';
import './css/index.scss';

import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(modules, applyMiddleware(ReduxThunk));

import App from './app.js';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from 'Src/css/theme.js';

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
