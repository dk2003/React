import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state={
        hasError:'' // 用于表示子组件是否产生错误
    }

    // 当parent的子组件出现报错时会触发以下函数的调用，并且携带错误信息
    static getDerivedStateFromError(error) {
        // console.log(error);
        return {hasError:error}
    }

    componentDidCatch(error,info){
        // 这个钩子常用于统计错误次数，反馈给后端服务器，通知编码人员进行bug的解决
        console.log('渲染组件时出错');
        console.log(error,info);
    }

    render() {
        return (
            <div>
                <h2>我是parent组件</h2>
                {this.state.hasError ? <h2>网络繁忙</h2> : <Child />}
            </div>
        )
    }
}
