```JS
root.render(
    // React.StrictMode这个内置组件可以检查App组件的合理性
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```
* 在开发中使用严格模式包围组件容易检查组件错误，但是这会导致所有组件在初始化渲染时执行两次

# Effect Hook
1. Effect Hook可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
2. React中的副作用操作
   - 发生ajax请求获取数据
   - 设置订阅/启动定时器
   - 手动更改真实dom
3. 语法和说明
   useEffect(()=>{
       <!-- 在此可以执行任何带 副作用操作 -->
        <!-- 第一个函数参数会在初始化的时候以及第二个参数[]中的状态改变的时候执行 -->
        <!-- 如果第二个参数不写，表示使用setState创建的全部状态变化都会导致第一个参数执行 -->

       <!-- 这个函数的返回值相当于componentWillUnmount -->
       return ()=>{
           <!-- 在此做一些收尾工作，比如清除定时器/取消订阅等等 -->
       }
   },[stateValue])
    <!-- 不写数组参数表示全部监测 写空数组都不监测 否则只监测指定的state -->

    <!-- useEffect可以看作一个开启了immediate=true的watch监听器，监视第二个参数中的所有属性 -->
4. 可以把useEffect Hook看作如下三个函数的组合
   componentDidMount()
   componentDidUpdate()
   componetWillUnmount()
