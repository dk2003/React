# class
```js
class Demo extends React.Component {
    constructor(props) {
        super(props);

    }
    // 类中可以直接写赋值语句，表示为类的实例对象添加属性
    state = {
        isHot: true,
        wind: 'big'
    }
    demo=()=>{
        this.setState({
            isHot: !this.state.isHot
        })
    }
    render() {
        return <h2 onClick={this.demo}>今天天气很{this.state.isHot ? '炎热' : '凉爽'},{this.state.wind}</h2>
    }
}
```
* 在class中的赋值语句表示为类的实例对象添加的属性，而不是原型对象
* 以上的state，demo都不在Demo的显式原型上，而是在实例对象身上
* render这样的简写方法的函数才位于Demo的显式原型上
* 同时Demo可以看作是一个函数，执行会有自己的this