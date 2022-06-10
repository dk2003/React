# 面向组件编程
1. 函数式组件
2. 类式组件

# 函数式组件
1. 方式1
```js
// 1. 创建函数式组件
function demo(){
   return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
}
// 2. 渲染组件到页面
ReactDOM.render(demo(),document.getElementById("test"));
```

2. 方式2
```js
// 1. 创建函数式组件
function Demo(){
   console.log(this);   // undefined
   return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
}
// 2. 渲染组件到页面
ReactDOM.render(<Demo />,document.getElementById("test"));
```

# this的值为什么是undefined
* 因为babel将jsx翻译之后开启了'use strict'严格模式，严格模式下函数的this不能为window，所以此处为undefined

# ReactDOM.render的工作流程
1. React解析组件标签，找到了Demo组件
2. 发现Demo组件时用函数定义的，随后调用该函数，将返回的虚拟DOM转化为真实DOM，随后呈现在页面中