import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'


export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Message</MyNavLink>
                        </li>
                    </ul>
                    {/* 注册路由 */}
                    {/* 匹配顺序时先匹配到一级，再匹配二级 */}
                    {/* 如果home开启了严格模式，那么匹配不到一级路由，更无法匹配到二级路由 */}
                    {/* 只有在模糊模式下 '/home/news' 才能匹配到一级路由 '/home' */}
                    <Route path='/home/news' component={News} />
                    <Route path='/home/message' component={Message} />
                    <Redirect to='/home/message' />
                </div>
            </div>
        )
    }
}
