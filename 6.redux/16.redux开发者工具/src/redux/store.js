// 引入createStore，创建redux中最核心的store对象
import { createStore,applyMiddleware,combineReducers } from 'redux';
// 引入为count组件服务的reducer
import countReducer from './reducers/count';
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'
// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk';
// 引入redux-devtools-extensions辅助使用开发者工具
import {composeWithDevTools} from 'redux-devtools-extension';

// 暴露store
// export default createStore(countReducer, applyMiddleware(thunk))

// 使用多个reducer
// 合并reducer
const allReducers =combineReducers({
    count:countReducer,
    people:personReducer
})
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

