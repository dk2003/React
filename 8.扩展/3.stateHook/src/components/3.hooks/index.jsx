import React from 'react'

// Test函数调用了多少次？ 每次render都需要调用一次
export default function Test() {

    // 下一行底层做了缓存处理，不会因为该函数再执行一遍就将count再次初始化
    const [count,setCount]=React.useState(0)
    const [name, setName] = React.useState('dk')



    function add(){
        // 第一种写法
        setCount(count+1);
        // 第二种写法
        setCount(count=>count+1)
    }
    function changeName(){
        setName('JACK')
    }
    return (
        <div>
            <h2>当前求和为{count}</h2>
            <h2>姓名{name}</h2>
            <button onClick={add}>点击+1</button>
            <button onClick={changeName}>点我改名</button>
        </div>
    )
}
