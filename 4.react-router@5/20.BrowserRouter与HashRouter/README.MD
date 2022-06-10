# BrowserRouter 与 HashRouter
1. 底层原理不一样
   BrowserRouter使用的是H5的history API，不兼容IE9及以下版本
   HashRouter使用的是URL的哈希值
2. url表现形式不一样
   BrowserRouter的路径中没有#
   HashRouter的路径包含#
3. 刷新之后对state参数的影响
   BrowserRouter没有任何影响，因为state会保存在history对象中
   HashRouter刷新之后会导致state参数的消失