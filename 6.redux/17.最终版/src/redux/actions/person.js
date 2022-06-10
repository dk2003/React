import {ADD_PERSON} from '../constant';

// 创建增加一个人的动作对象
export const createAddPersonAction=(personObj)=>{
    return {
        type: ADD_PERSON,
        data: personObj
    }
}