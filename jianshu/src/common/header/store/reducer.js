const defaultState = {
    focused: false,
  }; 
  
  //纯函数给定固定的输入就有固定的输出，而且不含有副作用
  export default (state = defaultState, action) => {
    if (action.type === "search-focus") {
      return {
        focused: true
      };
    }
    if (action.type === "search-blur") {
      return {
        focused: false
      };
    }
    return state;
  };
  