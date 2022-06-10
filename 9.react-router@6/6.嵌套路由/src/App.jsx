import React from 'react';
import { NavLink,useRoutes } from 'react-router-dom';
import routes from './routes'
// Routes相当于原来的Switch




// import './App.css';

export default function App() {
    // 根据路由表生成路由规则
    const element=useRoutes(routes)
    return (
        <div className="container">
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item" href="./about.html">About</a>
                                <a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* 路由链接 */}
                            <NavLink className={({ isActive }) => isActive ? 'list-group-item active' : 'list-group-item'} to='/about'>About</NavLink>
                            <NavLink end className={({ isActive }) => isActive ? 'list-group-item active' : 'list-group-item'} to='/home'>Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

