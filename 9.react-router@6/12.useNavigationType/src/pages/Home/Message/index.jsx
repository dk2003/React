import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function Message() {
    const [msg] = useState([
        { id: '001', title: 'Message1' },
        { id: '002', title: 'Message2' },
        { id: '003', title: 'Message3' },
        { id: '004', title: 'Message4' },
    ])
    const navigate = useNavigate();
    function showDetail(msg) {
        navigate('detail', {
            replace: true,
            state: {
                id: msg.id,
                title: msg.title
            }
        })
    }
    return (
        <div>
            <ul>
                {
                    msg.map(msg => {
                        return (
                            <li key={msg.id}>
                                <Link to='detail' state={{
                                    id: msg.id,
                                    title: msg.title
                                }}>{msg.title}</Link>
                                <button onClick={() => { showDetail(msg) }}>查看详情</button>
                            </li>
                        )
                    })
                }
                <hr />
                {/* 指定路由组件的展示位置 */}
                <Outlet />
            </ul>
        </div>
    )
}
