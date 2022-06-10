# 组件的三大核心属性 props
```js
class Person extends React.Component{
    state={
        name:'tom',
        age:18,
        sex:'男'
    }
    render(){
        return (
            <ul>
                <li>姓名:{this.props.name}</li>
                <li>性别:{this.props.sex}</li>
                <li>年龄:{this.props.age}</li>    
            </ul>
        )
    }
}
ReactDOM.render(<Person name='Tom' age='18' sex='男'/>, document.getElementById("app1"))
```