// 该文件创建一个为count组件服务的reducer
// reducer的本质就是一个函数


const initState=0;
// reducer函数会接收到两个参数，分别为：之前的状态(preState),动作对象(action)
export default function countReducer(preState=initState, action) {
    // 初始化 preState为undefined
    // if(preState===undefined) preState=0
    // 直接使用形参默认值

    // 从action对象中获取：type、data
    const { type, data } = action;
    // 根据type类型决定如何加工数据
    switch (type) {
        case "increment":
            return preState+data;
        case "decrement":
            return preState-data;
        default:
            // 初始化 type值为@@init 返回初始值
            return preState;
    }
}