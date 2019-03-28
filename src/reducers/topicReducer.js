import { REDUCE_TOPICS } from '../Actions'

const initialUserState = {
    arr:[]
}

function reduceTopics(state = initialUserState, action){
    switch(action.type){
        case REDUCE_TOPICS:{
            return {
                ...state,
                  arr: [...state.arr, action.topic]
                }
              }
              default: {
                  return state;
                }
              }
            }

export default reduceTopics;
