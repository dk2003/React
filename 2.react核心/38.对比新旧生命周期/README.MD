# 新旧生命周期的对比
* 在新版本中可以使用旧的钩子
* 但是有部分旧的钩子不太推荐

* componentWillMount 被重命名为 UNSAFE_componentWillMount 了，在17版本而且不被推荐使用。在18版本只能写成后面的形式才能使用
* componentWillUpdate 被重命名为 UNSAFE_componentWillUpdate 了，在17版本而且不被推荐使用。在18版本只能写成后面的形式才能使用
* componentWillReceiveProps 被重命名为 UNSAFE_componentWillReceiveProps 了，在17版本而且不被推荐使用。在18版本只能写成后面的形式才能使用

* 为什么要进行这些修改？
React现在致力于实现异步渲染
在异步渲染的实现中，以上三个钩子的不当使用可能带来bug
添加UNSAFE前缀，指的不是安全性，而是标识使用这些生命周期的代码在React蔚来版本中更可能会出现bug，尤其是在启用异步渲染之后

* 我们现在基本上很少用这三个钩子
