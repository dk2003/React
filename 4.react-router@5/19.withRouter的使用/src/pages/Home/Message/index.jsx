import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' }
        ]
    }
    replaceShow = (id, title) => {
        // 编程式路由导航——replace
        // 传递params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // 传递search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // 传递state参数
        this.props.history.replace(`/home/message/detail`,{id,title})
    }
    pushShow = (id, title) => {
        // 编程式路由导航——push
        // 传递params参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // 传递search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        // 传递state参数
        this.props.history.push(`/home/message/detail`, { id, title })

    }
    back=()=>{ 
        this.props.history.goBack()
    }
    forward=()=>{
        this.props.history.goForward()
    }
    go = ()=> {
        this.props.history.go(2)
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map(item =>
                            <li key={item.id}>
                                {/* 向路由组件传递params参数 */}
                                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

                                {/* 向路由组件传递search参数 */}
                                {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                                {/* 向路由组件传递state参数 */}
                                <Link to={{ pathname:'/home/message/detail',state:{
                                    id: item.id,title: item.title
                                }}}>{item.title}</Link>&nbsp;
                                <button onClick={() => { this.pushShow(item.id, item.title) }}>push查看</button>&nbsp;&nbsp;
                                <button onClick={() => { this.replaceShow(item.id, item.title) }}>replace查看</button>
                            </li>
                        )
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

                {/* search参数无需声明接收,正常注册路由即可 */}
                {/* <Route path='/home/message/detail' component={Detail} /> */}

                {/* state参数无需声明接收，正常注册路由组件即可 */}
                <Route path='/home/message/detail' component={Detail} />

                <hr />
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>go</button>

            </div>
        )
    }
}
