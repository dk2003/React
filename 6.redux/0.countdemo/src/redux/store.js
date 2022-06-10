// 引入createStore，创建redux中最核心的store对象
import { createStore,applyMiddleware } from 'redux';
// 引入汇总的的reducer
import reducer from './reducers'

// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk';
// 引入redux-devtools-extensions辅助使用开发者工具
import {composeWithDevTools} from 'redux-devtools-extension';

// 暴露store
// export default createStore(countReducer, applyMiddleware(thunk))

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

