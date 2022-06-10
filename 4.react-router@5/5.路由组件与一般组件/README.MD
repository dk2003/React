# 路由的基本使用
1. 明确好界面中的导航区和展示区
2. 导航区的a标签改为Link标签
   <Link to='/xxx'>Demo</Link>
3. 展示区写Route标签进行路径的匹配
   <Route path='/xxx' component={Demo}/>
4. <App>最外侧包裹了一个<BrowserRouter>或者<HashRouter>

# Link标签
* Link标签最终也变成了a标签+href的形式

# pages/component
* 路由组件写入pages文件夹中
* 普通组件写入component文件夹中

# props消息
* 切换到route时，路由会接收到路由器传递给自己的props路由信息
history:
  go: ƒ go(n)
  goBack: ƒ goBack()
  goForward: ƒ goForward()
  push: ƒ push(path, state)
  replace: ƒ replace(path, state)
location:
  pathname: "/home"
  search: ""
  state: undefined
match:
  params: {}
  path: "/Home"
  url: "/home"
  staticContext: undefined