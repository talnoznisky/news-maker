import { combineReducers } from 'redux';
import articleReducer from './reducers/articleReducer'
import topicReducer from './reducers/topicReducer'

const store = combineReducers({
    articleReducer,
    topicReducer
})

export default store
