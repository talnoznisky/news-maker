import { REDUCE_ARTICLES } from '../actions'

function articleReducer(state = [], action){
    switch(action.type){
        case REDUCE_ARTICLES: {
            state  = action.articles
            return state;
          }
          default: {
            return state;
          }
        }
      }

export default articleReducer;
