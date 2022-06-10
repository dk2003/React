import {ADD_PERSON} from '../constant';

// 初始化人的列表
const initState=[{id:'001',name:'tom',age:18}];
export default function PersonReducer(preState=initState,action){
    const {type,data}=action;
    switch(type){
        // 若添加一个人
        case ADD_PERSON:
            // 为什么我们常常要写成数组展开，浅拷贝的样子
            // 为什么下不写成这样子？preState.unshift(data)然后再返回preState
            // 修改参数会导致reducer不是纯函数
            // 这是因为react-redux底层会做判断，如果地址值相同，就不会进行页面的更新
            return [data, ...preState]
        default:
            return preState;
    }
    
}