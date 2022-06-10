# setState
```js
add=()=>{
    const {count} = this.state;
    // 第一种写法：传递 对象
    /* this.setState({count:count+1})
    console.log(this.state.count); 这里还是未更新的值
        */
    // 第二种写法：传递 对象+callback
    // callback的作用，状态真正修改dom更新之后的回调，与vue中的nextTick类似
    // 因为react中修改状态是异步更新，利用虚拟dom将多次修改合并成一次修改，最后统一进行状态的更新
    // this.setState({ count: count + 1 },()=>{
    //     console.log(this.state.count);
    // })
    // 第三种写法：传递updater函数+callback
    // 1. updater为返回stateChange对象的函数
    // 2. updater可以接收到state和props
    // 3. 对象式的setState是函数式的简写方式(语法糖)
    // 使用原则，如果新状态不依赖原状态则使用对象方式，否则使用函数形式

    // 区别：在vue中，数据的更新是同步的，视图的更新是异步的
    // 在react中，数据和视图的更新都是异步的
    this.setState((state,props)=>{
        return {count:state.count+2}
    }, () => {
        console.log(this.state.count);
    })
}
```