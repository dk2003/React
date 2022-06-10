# react-redux数据共享版本
1. 定义一个Person组件，和Count组件通过redux共享数据
2. 为Person组件编写：reducer、action，配置constant常量
3. 重点：Person组件的reducer和Count的Reducer要使用combineReducers进行合并，
   合并之后的总状态是一个对象
4. 交给store的总是reducer，最后注意在组件中取出状态的时候，记得取到位