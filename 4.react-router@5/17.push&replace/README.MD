# push&replace
* 默认路由跳转使用的是push模式
* 如何开启replace模式？
  <Link replace to={{ pathname:'/home/message/detail',state:{
    id: item.id,title: item.title
}}}>{item.title}</Link>
 Link标签把raplace属性设置为true即可开启replace模式