import { REDUCE_ARTICLES } from '../actions'

function articleReducer(state = [], action){
    switch(action.type){
        case REDUCE_ARTICLES: {
            return action.articles;
          }
          default: {
            return state;
          }
        }
      }

export default articleReducer;
