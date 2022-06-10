# 前端路由
* 前端路由的工作原理就是监听路径(path)的改变从而改变显示的组件
* 一个路由就是一个映射关系(key:value)
  key为路径(path)，value可能是function或component
  前端路由的value是组件
  后端路由的value是函数

* webpack-dev-server已经解决好了history模式下的刷新问题
  访问到不存在的资源，会直接返回index.html