# JSX
* JSX全程JavaScript XML
* react定义的一种类似于XML的JS扩展语法

# XML
* 早期用于存储和传输数据，后期使用JSON
<student>
    <name>Tom</name>
    <age>19</age>
</student>

# json
"{"name":"Tom","age":"19"}"

# 语法规则
1. 定义虚拟DOM不要写""
2. 标签中的表达式需要使用{}包裹
3. 需要用className而不是class为元素添加样式
   为什么不用class?     ————与es6中class做区分
4. style内联样式不能写字符串形式，要写成js对象形式
5. 一个虚拟节点只能有一个根标签
6. 每个标签必须闭合
   两种方法闭合：1. 结束标签 2. /自结束
7. 小写字母开头的标签被视作原生标签，大写字母开头的标签被视作react组件