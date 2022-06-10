import {ADD_PERSON} from '../constant';

// 初始化人的列表
const initState=[{id:'001',name:'tom',age:18}];
export default function PersonReducer(preState=initState,action){
    const {type,data}=action;
    switch(type){
        // 若添加一个人
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState;
    }
    
}