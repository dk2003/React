# useOutlet
* 作用：用来呈现当前组件中渲染的嵌套路由
* 实例代码
```js
const result=useOutlet()
console.log()
// 如果嵌套路由没有挂载，则result为null
// 如果嵌套路由已经挂载，则展示嵌套的路由对象