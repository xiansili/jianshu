import * as constans from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list:[]
});

//纯函数给定固定的输入就有固定的输出，而且不含有副作用
export default (state = defaultState, action) => {
  //接受action进行相应处理
  if (action.type === constans.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === constans.SEARCH_BLUR) {
    return state.set('focused', false)

  }
  if( action.type === constans.CHANGE_LIST) {
    return state.set('list', action.data)
  }
  return state;
};
