import { INCREMENT } from './constant';
import { DECREASE } from './constant';
export const initialState = {
  counter: 0,
};

export default function homeContainerReducer(state = initialState, action) {
  switch (action.type) {
    
    case INCREMENT:
      console.log(action.type);
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter >= 1 ? state.counter - 1  : state.counter,
      };
    default:
      return state;
  }
}
