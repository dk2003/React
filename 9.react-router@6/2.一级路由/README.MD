# 安装路由
1. cnpm i react-router-dom
2. 使用
* 使用路由器包裹
import {BrowserRouter} from 'react-router-dom'
<BrowserRouter>
    <App />
</BrowserRouter> 
* 路由链接
import { NavLink, Routes, Route } from 'react-router-dom';
{/* 路由链接 */}
<NavLink className="list-group-item" to='/about'>About</NavLink>
<NavLink className="list-group-item" to='/home'>Home</NavLink>
* 注册路由
<Routes>
    {/* 必须使用Routes包裹 */}
    <Route path="/about" element={<About />} />
    <Route path="/home" element={<Home />} />
</Routes>

## 注意，之前的Switch被替换成了Routes，而且必须带上Routes
## 之前的component={About}被替换为了element={<About />}