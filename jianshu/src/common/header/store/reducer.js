import * as constans from './constants';
const defaultState = {
    focused: false,
  }; 
  
  //纯函数给定固定的输入就有固定的输出，而且不含有副作用
  export default (state = defaultState, action) => {
    //接受action进行相应处理
    if (action.type === constans.SEARCH_FOCUS ) {
      return {
        focused: true
      };
    }
    if (action.type === constans.SEARCH_BLUR ) {
      return {
        focused: false
      };
    }
    return state;
  };
  