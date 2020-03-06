import { combineReducers } from 'redux';
import auth from './auth';
import ui from './ui';
import shop from './shop';
import modal from './modal';

const reducers = combineReducers({
    auth,
    ui,
    modal,
    shop,
});

export default reducers;
