import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';
import post from './post';

// export default const reducers = combineReducers({
//     counter,
//     ui
// })

const reducers = combineReducers({
    counter,
    ui,
    post
});

export default reducers;

