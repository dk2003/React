# 解决this指向问题
```js
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHot: true
        }
        this.demo=this.demo.bind(this);
        // 将原型上的demo方法修饰一下，放到实例对象上
        // 在实例对象上添加与原型对象的同名属性，不会覆盖原型属性，而是添加实例属性
    }
    demo(){
        console.log(this);
        this.state.isHot=!this.state.isHot;
    }
    render() {
        return <h2 onClick={this.demo}>今天天气很{this.state.isHot ? '炎热' : '凉爽'}</h2>
    }
}
```