import { INCREMENT, DECREMENT } from '../constant';
// 该文件专门为Count组件生成action对象

// 同步action：action的值为对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })


// 异步action：action的值为函数
// 异步action不是必须要用的
export const createIncrementAsyncAction= (data,time) => {
    return function (dispatch) {
        setTimeout(() =>{
            dispatch(createIncrementAction(data))
        },time)
    }
}