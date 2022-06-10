# redux的基本使用
* 安装
cnpm i redux -s
* 使用
// 引入createStore，创建redux中最核心的store对象
import { createStore } from 'redux';
// 引入为count组件服务的reducer
import countReducer from './count_reducer';
// 暴露store
export default createStore(countReducer)

# 求和案例，精简版
1. 去除Count组件自身的状态
2. .src下建立 redux/store.js redux/count_reducer.js
3. store.js 
   - 引入redux中的createStore函数创建一个store
   - createStore调用时要传递一个为其服务的reducer
   - 记得暴露store对象
4. count_reducer.js
   - reducer的本质是一个函数，接收preState，action，返回加工之后的状态
   - reducer有两个作用：初始化状态和加工状态
   - reducer在第一次被调用时，是store自动触发的，传递的preState是underfunded,action是{type:'@@REDUX/INIT_...'}
5. 在index.js中检测store中状态的改变，一旦发生改变重新渲染<App/>
   备注：redux只负责管理状态，至于状态改变驱动页面的展示这个步骤，需要我们自己完成