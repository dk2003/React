# state
* state携带的参数不会像search/params一样将参数展示在地址栏

1. 传递state参数：<Link to={{ pathname:'/home/message/detail',state:{
                        id: item.id,title: item.title
                    }}}>{item.title}</Link>
2. 无需声明接收，正常注册路由组件即可：<Route path='/home/message/detail' component={Detail} />
3. 使用state参数：const { id, title } = this.props.location.state;

* 传递的state参数，即时在页面刷新之后，还可以获取到state参数，因为state被history这个BOM对象缓存了
* 但是清除浏览器缓存之后，state就是undefined

   