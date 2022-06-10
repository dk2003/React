
```js
export default function PersonReducer(preState=initState,action){
    const {type,data}=action;
    switch(type){
        // 若添加一个人
        case ADD_PERSON:
            // 为什么我们常常要写成数组展开，浅拷贝的样子
            // 为什么下不写成这样子？preState.unshift(data)然后再返回preState
            // 这是因为react-redux底层会做判断，如果地址值相同，就不会进行页面的更新
            return [data, ...preState]
        default:
            return preState;
    }  
}
```

# 高阶函数与纯函数
* 纯函数：一类特别的函数：只要是同样的输入(实参)，必定得到同样的输出(返回)
* 必须遵循以下约束
  1. 不得改写实参的数据 所以不得使用unshift修改参数数据
  2. 不会产生任何副作用，例如网络请求，输入和输出设备
  3. 不能调用Date.now()或者Math.random()等不纯的方法
* redux的reducer必须是一个纯函数