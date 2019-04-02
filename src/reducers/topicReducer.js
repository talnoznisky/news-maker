import { REDUCE_TOPICS } from '../actions'

const initialUserState = {
    arr:[]
}


function topicReducer(state = initialUserState, action){
    switch(action.type){
        case REDUCE_TOPICS:{
            return{
              ...state,
              arr: [...state.arr, action.searchValue]
            }
              }
              default: {
                  return state;
                }
              }
            }

export default topicReducer;
