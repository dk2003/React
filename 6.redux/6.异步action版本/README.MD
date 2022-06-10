# 异步Action
* 同步action：对象
* 异步action：函数


* 本来store.dispatch只能接收一个对象，用来通知reducer去操作数据
* 但是要实现异步action，需要向将action设置为一个函数
* 但是store.dispatch不能接收一个函数作为参数
* 因此需要安装redux-thunk这个中间件来解决问题
    cnpm i redux-thunk
    ···
    import thunk from 'redux-thunk';
    export default createStore(countReducer, applyMiddleware(thunk))
* 这样store.dispatch就可以接收到一个函数，这个时候就不像接收到对象那样去通知reducer操作数据
* 而是单纯地执行这个函数，等异步任务执行完毕，得到真正的、对象形式的同步action
* 再调用store.dispatch传递同步action去通知reducer操作数据




