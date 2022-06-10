# state
1. 不需要占位
2. 传递参数
<li key={msg.id}>
  <Link to='detail' state={{
      id:msg.id,
      title: msg.title
  }}>{msg.title}</Link>
</li>
3. 接收参数
const {state:{id,title}}=useLocation();
