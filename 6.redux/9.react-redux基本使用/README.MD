# react-redux的基本使用
1. 明确两个概念：
   - UI组件：不能使用任何redux的api，只负责页面的呈现，交互等等。
   - 容器组件：负责和redux通信，将结果交给UI组件。
2. 如何创建一个容器组件————靠react-redux的connect函数
   connect(mapStateToProps,mapDispatchToProps)(UI组件)
   - mapStateToProps：映射状态，返回值是一个对象
   - mapDispatchToProps:映射操作状态的方法，返回值是一个对象
   - 容器组件中的store是依靠props传递的，而不是再容器组件中直接引入的
3. 使用react-redux之后无需使用store.subscribe检测数据的变化
   就可以根据数据的变化响应视图的变化
   connect函数以及监测到了state中数据的变化