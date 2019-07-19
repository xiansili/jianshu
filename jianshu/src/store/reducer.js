
//combineReducers函数功能是可以拆分整合store
import { combineReducers } from 'redux-immutable';

//as是es6的语法，起别名的意思，为了防止重复引起的问题；
import { reducer as headerReducer } from '../common/header/store';


const reducer = combineReducers({
    header: headerReducer
})

export default reducer;