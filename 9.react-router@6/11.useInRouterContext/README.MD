# useInRouterContext
* 作用：如果组件在<Router>的上下文中呈现，则useInRouterContext钩子返回true，否则返回false
* 被<HashRouter/>/<BrowserRouter/>【路由器】包裹的组件都处于<Router>的上下文环境中
  
* 当封装第三方组件的时候，常常需要知道使用者是否在路由环境下使用此组件