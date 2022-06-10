# 批量传递数据
1. 方式1：
```js
class Person extends React.Component{
    state={
        name:'tom',
        age:18,
        sex:'男'
    }
    render(){
        console.log(this);
        return (
            <ul>
                <li>姓名:{this.props.name}</li>
                <li>性别:{this.props.sex}</li>
                <li>年龄:{this.props.age}</li>    
            </ul>
        )
    }
}
const info = { name: 'Tom', age: '18', sex: '男' }
ReactDOM.render(<Person {...info}/>, document.getElementById("app1"))
```
注意{...info}与{...{a:1,b:2}}最外层的花括号不是一个含义
在react中(第一种)的花括号是mastache语法，而后面原生js的外层花括号是一种浅克隆对象的语法
但是不就说明了使用展开运算符去展开info对象了吗？不是不能展开对象吗？
这是因为react+babel已经为[标签属性对象]实现了迭代器接口，使得[标签属性对象]是可以展开的了

1. 方式2
```js
class Person extends React.Component{
   state={
       name:'tom',
       age:18,
       sex:'男'
   }
   render(){
       console.log(this);
       return (
           <ul>
               <li>姓名:{this.props.info.name}</li>
               <li>性别:{this.props.info.sex}</li>
               <li>年龄:{this.props.info.age}</li>    
           </ul>
       )
   }
}
ReactDOM.render(<Person info={{name :'Tom',age:'18',sex:'男'}}/>, document.getElementById("app1"))
```