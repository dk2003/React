# jsx
* 为什么不使用原生js，而要使用jsx语法?

# 创建虚拟dom的两种方式
1. js直接创建
const VDOM = React.createElement('h1', {id:'title'},React.createElement('span',{},'hello,react') );
2. jsx语法创建
const VDOM=(
   <h1>
       <span>hello,react</span>
   </h1>
); 

# babel
* babel实际上就把2中的jsx语法翻译成了1中的js语法
* jsx相当于原生js创建虚拟dom的一个语法糖