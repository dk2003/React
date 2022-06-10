import React from 'react';
import {useParams,useMatch} from 'react-router-dom'

export default function Detail(props) {
    // 函数式组件的props中并不能接收到为路由组件准备的三个参数，只能接收到自己传递的参数
    // 因此需要用到hook
    console.log(props);

    const {id,title}=useParams();

    // 使用useMatch可以得到react-router@5中props中的match项
    const match=useMatch('/home/message/detail/:id/:title');
    console.log(match);

    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
            </ul>
        </div>
    )
}
