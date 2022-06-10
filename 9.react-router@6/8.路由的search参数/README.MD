# search
1. 不需要占位
2. 传递参数
msg.map(msg=>{
   return (
       <li key={msg.id}>
           <Link to={`detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>
       </li>
   )
})
3.接收参数
const [search,setSearch] = useSearchParams();
const id=search.get('id');
const title=search.get('title');
// 使用useLocation这个hook可以获取到之前的props.location
const l = useLocation();
console.log(l);