# 类式组件
1. 类名就是组件名
2. 必须继承React.Component
3. 必须实现render方法，并且返回虚拟dom

# 创建语法
```js
class Demo extends React.Component {
   render() {
       console.log(this);   // render中的this是Demo的组件实例对象
       return <h2>我是用类定义的组件(适用于【复杂组件的定义】)</h2>
   }
}
ReactDOM.render(<Demo />, document.getElementById("test"))
```
* 执行ReactDOM.render
1. react解析组件标签，找到了Demo组件
2. 发现组件是使用类定义的，随后new得到一个该类的实例，并且通过该实例调用原型上的render方法
3. 将render返回的虚拟dom转化为真实dom挂载到页面上
   