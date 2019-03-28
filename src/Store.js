import { combineReducers } from 'redux';
import articleReducer from './reducers/articleReducer.js';
import topicReducer from './reducers/topicReducer.js';

const store = combineReducers({
    articleReducer,
    topicReducer
})

export default store
