import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';

import {createStore} from 'redux';
import reducers from './reducers';

import {Provider} from 'react-redux';

const store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);