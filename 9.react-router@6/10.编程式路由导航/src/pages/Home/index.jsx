import React,{} from 'react';
import { NavLink,Outlet} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h3>我是Home的内容</h3>
            <div>
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
            </div>
        </div>
    )
}
