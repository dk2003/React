# useRoutes路由表
* 使用这个Hook即可生成一个路由表
* 通常会把路由表配置抽离到一个文件  src/routes/index.jsx

# 使用方法
* 引入
import { NavLink,useRoutes } from 'react-router-dom';
···
const routes=[
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    }
]
const element=useRoutes(routes)
···
<div className="panel-body">
    {/* 注册路由 */}
    {/* <Routes>
        必须使用Routes包裹
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path='/' element={<Navigate to='/about' />} />
    </Routes> */}
    {/* 使用路由表 */}
    {element}
</div>
