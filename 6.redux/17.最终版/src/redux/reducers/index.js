// 该文件用于汇总所有的reducer
import { combineReducers } from 'redux';
// 引入为count组件服务的reducer
import count from './count';
// 引入为Person组件服务的reducer
import people from './person'

export default combineReducers({
    count,
    people
})
