# params
1. 提前占位
path:'message',
 element: <Message />,
 children: [
     { 
         path: 'detail/:id/:title',
         element: <Detail test={1}/>
     },
     { 
         path: '/home/message',
         element: <Navigate to='detail/1/Msg1' />
     }
 ]
2. 传参
return (
    <li key={msg.id}>
        <Link to={`detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
    </li>
)
3. 使用hook接收
// 函数式组件的props中并不能接收到为路由组件准备的三个参数，只能接收到自己传递的参数
// 因此需要用到hook
const {id,title}=useParams();

// 使用useMatch可以得到react-router@5中props中的match项
const match=useMatch('/home/message/detail/:id/:title');
console.log(match);