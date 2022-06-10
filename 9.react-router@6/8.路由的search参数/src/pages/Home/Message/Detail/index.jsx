import React from 'react';
import {useSearchParams,useLocation} from 'react-router-dom'
export default function Detail(props) {
    const [search,setSearch] = useSearchParams();
    const id=search.get('id');
    const title=search.get('title');

    // 使用useLocation这个hook可以获取到之前的props.location
    const l = useLocation();
    console.log(l);
    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <button onClick={() => { setSearch('id=000&title=msg100')}}>点击更新search参数</button>
            </ul>
        </div>
    )
}
