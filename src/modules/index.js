import { combineReducers } from 'redux';
import ui from './ui';
import shop from './shop';
import modal from './modal';

const reducers = combineReducers({
    ui,
    modal,
    shop,
});

export default reducers;
