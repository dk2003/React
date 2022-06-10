# react-redux优化
1. 容器组件和UI组件混合成一个文件
2. 无需给容器组件传递store，给<App/>组件包裹一个<Provider store={store}></Provider>即可
3. 使用了react-redux之后再也不用自己监测redux中状态的变化了，容器组件可以自动完成这个工作
4. mapDispatchToProps也可以简单写成一个对象
5. 一个组件要和redux打交道要经过那几步?
   - 定义UI组件，不必暴露
   - 引入connect生成容器组件，并且暴露，写法如下
        connect(
            (state)=>({})   // 映射状态
            ,{key:xxxAction}    // 映射操作状态的方法
        )(UI)
   - 在UI组件中通过this.propa.xxxx读取和操作状态