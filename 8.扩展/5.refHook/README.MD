# refHook
* useRef是use hooks的一种，一般用于function组件，而createRef一般用于class组件；
* 由useRef创建的ref对象在组件的整个生命周期内都不会改变，但是由createRef创建的ref对象，组件每更新一次，ref对象就会被重新创建。
* 事实上，useRef之所以出现，就是因为在函数式组件中使用createRef创建ref时存在弊端（组件每次更新，ref对象就会被重新创建）


* 类式组件在重新渲染的时候，只需要调用其中的render函数即可
* 上文以及说到，函数式组件在每次程序渲染时，整个函数都要重新执行，这就导致我们函数体中的内容会重新执行，使得许多初始化的操作重新执行，从而导致状态的不合理初始化
* 如果在函数式组件中继续使用createRef，会导致函数每次重新执行都会创建新的ref，显然不是我们想要的，因此推出了useRef这个refHook来缓存之前生成的ref

# 语法
* const myRef=React.useRef()
  <a ref={myRef}></a>