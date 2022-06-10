# render
* 父组件因为数据更新调用render时，子组件会调用render吗？
1. 当子组件用到了父组件的数据，那么父组件重新调用render时，子组件也应该重新调用render，实际上也确实调了
2. 当子组件没有用到父组件的数据，那么父组件重新调用render时，子组件按理说不应该调用render，但是实际上也调了

* 父组件调用setState函数，但是传入了一个空对象，会重新调用render吗？
1. 会调用，之前在redux中监测数据的变化来刷新页面的时候，就是使用的setState传递一个空对象来刷新页面。
2. 但是按道理来说不应该重新render

* 造成以上现象的原因：
* Component中的shouldComponentUpdate()总是返回true

* 效率高的做法
1. 只有当组件的state或者props数据发生改变时才重新render

* 解决方案
1. 利用阀门来判断是否应该重新调用render
```js
shouldComponentUpdate(nextProps,nextState){
  // nextProps,nextState是下一个即将要更新的props/state
  if (this.state.carName === nextState.carName) return false;
  else return true;
}
```
* 真实开发中不需要自己手动控制阀门来判断是否需要重新render
2. 将组件对象继承于pureComponent
```js
import React, { PureComponent } from 'react'
···
export default class Parent extends PureComponent {}
```

```js
changeCar=()=>{
     // this.setState({carName:'迈巴赫'});

     // 在Component普通组件中，只要往setState中传入一个对象，就会引起render的调用
     // 在PureComponent纯组件中，如果传入的obj和之前的obj是同一个对象，不会引起render的调用
     // 因为纯组件会尽量减少无意义的render
     const obj=this.state;
     obj.carName='迈巴赫';
     this.setState(obj);
 }
```