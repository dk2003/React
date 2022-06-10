# 精准匹配与模糊匹配

## 模糊匹配（默认）
<MyNavLink to='/home/a/b' >Home</MyNavLink>
<Route path="/home" component={Home} />
* 模糊匹配的情况下，以上两种可以匹配到
* 模糊匹配就是route要求的一个都不能少
* 而且需要从头开始匹配
  
<MyNavLink to='/home' >Home</MyNavLink>
<Route path="/home/a/b" component={Home} />
* 这种情况下路由匹配不到

## 精准匹配
<Route exact={true} path="/home" component={Home} />
or
<Route exact path="/home" component={Home} />
* 添加exact属性即可开启严格匹配

# 能不开启严格匹配就不开启严格匹配
# 有些时候开启严格匹配会导致无法匹配二级路由的问题

