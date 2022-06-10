# 嵌套路由
1. 定义规则
{
  path: '/home',
  element: <Home />,
  children: [
      {
          path:'news',
          element: <News />
      },
      {
          path:'message',
          element: <Message />
      },
      {
          path: '/home',
          element: <Navigate to='message' />
      }
  ]
},
2. 引入
import { NavLink,Outlet} from 'react-router-dom'
3. 使用
<ul className="nav nav-tabs">
     <li>
         <NavLink to='news' className='list-group-item'>News</NavLink>
     </li>
     <li>
         <NavLink to='message' className='list-group-item'>Message</NavLink>
     </li>
</ul>
{/* 指定路由组件呈现的位置 */}
<Outlet/>
4. 控制匹配到子路由时父组件不会高亮选中
<NavLink end to='/home'>Home</NavLink>
使用end属性即可

# 子路由中的/ ./ 等路径都可以省略，只写名称即可
