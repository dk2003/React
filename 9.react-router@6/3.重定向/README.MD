# 重定向
<Navigate>: 专门用来重定向的组件
只要这个组件被渲染，就会跳转到他指定的路由

# 使用方式
import { NavLink, Routes, Route,Navigate } from 'react-router-dom';
<Route path='/' element={<Navigate to='/about' />} />
{sum === 2 ? <Navigate to='/about' replace/>:<h4>当前sum的值是:{sum}</h4>}

# caseSensitive
<Route caseSensitive path='./home'>
该属性用来指定匹配时是否区分大小写，默认为false，表示不区分大小写