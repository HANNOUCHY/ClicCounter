import { INCREMENT } from './constant';
import { DECREASE } from './constant';
export function incrementAction() {
  return {
    type: INCREMENT,
  };
}
export function decreaseAction() {
  return {
    type: DECREASE,
  };
}