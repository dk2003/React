# 总结生命周期_旧
* 生命周期一般可以分为三个主要阶段
1. 初始化阶段
   - 由ReactDOM.render()触发————初次渲染
        1. constructor
        2. componentWillMount
        3. render
        4. componentDidMount    ==> 常用，开启定时器，发送网络请求，订阅消息
2. 更新阶段
   - 由组件内部this.setState/this.forceUpdate/父组件render触发
        1. componentWillReceiveProps()
        2. shouldComponentUpdate()
        3. componentWillUpdate()
        4. render()
        5. componentDidupdate()
3. 卸载阶段
   - 由ReactDOM.unmountComponentAtNode()触发
        1. componentWillUnmount()   ==> 常用，关闭定时器，取消订阅