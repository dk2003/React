import React from 'react';
import PubSub from 'pubsub-js'


// Test函数调用了多少次？ 每次render都需要调用一次
export default function Test(props) {

    // 下一行底层做了缓存处理，不会因为该函数再执行一遍就将count再次初始化
    const [count,setCount]=React.useState(0)

    // 这个hook相当于watch加上立即执行
    React.useEffect(() => {
        console.log(1);
        let timer=setInterval(() => {
            setCount(count=>count+1);
        },1000)
        return ()=>{
            clearInterval(timer);
            PubSub.unsubscribe(props.token)
        }
    },[])
    // 不写数组全部监测 写空数组都不监测 否则否监测指定的state

    const myContainer=React.useRef();
    // const myContainer=React.createRef();

    function add(){
        // 第一种写法
        setCount(count+1);
        // 第二种写法
        setCount(count=>count+1)
    }
    function unMount(){
        PubSub.publish('Unmout');
    }
    function showMsg(){
        console.log(myContainer.current.value);
    }
    
    return (
        <div>
            <h2>当前求和为{count}</h2>
            <input type="text" ref={myContainer}/>
            <button onClick={add}>点击+1</button>
            <button onClick={unMount}>卸载组件</button>
            <button onClick={showMsg}>点击提示数据</button>
        </div>
    )
}
