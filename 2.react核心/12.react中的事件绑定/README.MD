# react中的事件绑定
* 如何为创建的虚拟dom定义事件绑定

# 原生事件绑定
1. onclick=()=>{}
2. addEventLisnter('click',()=>{})
3. <div onclick="demo()"></div>
   原理：onclick中直接写字符串，当触发点击事件的时候直接[将字符串当作js代码]去执行

# react事件绑定
```js
class Demo extends React.Component {
   constructor(props) {
       super(props);
       // 初始化状态
       this.state = {
           isHot: true
       }
   }
   demo(){
       console.log('标题被点击了');
   }
   render() {
       return <h2 onClick={this.demo}>今天天气很{this.state.isHot ? '炎热' : '凉爽'}</h2>
   }
}
```
1. 首先onclick等事件全部被重写为了小驼峰命名法onClick
2. 同时事件属性onClick的值不再是一个可以被当作js代码执行的字符串，而直接是一个函数