import React from 'react';
import ReactDom from 'react-dom';

import 'normalize.css';
import './css/index.scss';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import modules from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    modules,
    composeWithDevTools(applyMiddleware(ReduxThunk)),
);

import App from './app.js';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from 'Src/css/theme.js';
import GlobalStyle from 'Style/global-style';

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
