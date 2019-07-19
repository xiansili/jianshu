//让index.js成为header的入口，减少引入的层数
import reducer from './reducer';
import * as actionCreators from './actionCreators'
import * as constants from './constants'

export { reducer,actionCreators,constants}