# Error boundary 错误边界
* 错误边界：原来捕获后代组件错误，渲染出备用页面
* 特点：只能捕获【后代组件生命周期钩子】中产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
* 使用方式
getDerivedStateFromError配合componentDidCatch

```js
// 生命周期函数，一旦后代组件生命周期钩子的执行出现错误，就会触发以下函数
static getDerivedStateFromError(error){
    console.log(error);
    // 返回新的state
    return {
        hasError:true
    }
}

componentDidCatch(error,info){
    // 统计页面的错误。请求发送到后台去
    console.log(error,info);
}
```