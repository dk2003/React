import React, { useState } from 'react';
import { Outlet,Link } from 'react-router-dom';

export default function Message() {
    const [msg] = useState([
        { id: '001', title: 'Message1' },
        { id: '002', title: 'Message2' },
        { id: '003', title: 'Message3' },
        { id: '004', title: 'Message4' },
    ])
    return (
        <div>
            <ul>
                { 
                    msg.map(msg=>{
                        return (
                            <li key={msg.id}>
                                <Link to={`detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>
                            </li>
                        )
                    })
                }
                <hr />
                {/* 指定路由组件的展示位置 */}
                <Outlet/>
            </ul>
        </div>
    )
}
