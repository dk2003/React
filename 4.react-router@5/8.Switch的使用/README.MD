# Switch
* 解决组测路由组件非常多时的问题
* 通常情况下，path和component是一一对应关系。
* 匹配到路由组件之后应该立即停止，不应该再往下匹配了
  <Switch>
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
      <Route path="/home" component={Test} />
  </Switch>