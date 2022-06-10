# params参数
* 路由连接，携带参数：<Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
* 组测路由，接收参数：<Route path='/home/message/detail/:id/:title' component={Detail} />
* 使用参数：const { id, title } = this.props.match.params;