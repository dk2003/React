# 生命周期理解
* 组件从创建到死亡他会经历的一些特定的阶段
* react组件包含一系列钩子函数(生命周期函数),会在特定的时刻调用
* 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作


# forceUpdate
* 如果状态里面的数据改变了，但是将shouldComponentUpdate阀门关闭了
* 这就导致状态改变了，视图没有改变
* forceUpdate可以用来跳过shouldComponentUpdate钩子直接强制更新

# componentWillReceiveProps
* 这个钩子当父组件重新渲染时会调用，不管子组件有没有接收到父组件传递的参数，不管子组件接收到的参数是否发生了变化
* 只要父组件重新调用render函数，子组件都会执行这个生命周期钩子
* 初始化组件接收props时不会调用