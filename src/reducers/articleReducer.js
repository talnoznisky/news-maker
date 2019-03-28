import { REDUCE_ARTICLES } from '../Actions'

function reduceArticles(state = [], action){
    switch(action.type){
        case REDUCE_ARTICLES:{
            return action.articles;
        }
        default: {
            return state;
        }
    }

}

export default reduceArticles;
