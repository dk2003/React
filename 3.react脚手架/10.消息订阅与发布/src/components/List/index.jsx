import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import './index.css'

export default class List extends Component {
    state = {
        dataList: [],
        isFirst: true,
        isLoading: false,
        err: '',  //存储请求相关的错误信息

    }
    componentDidMount() {
        this.token=PubSub.subscribe('updateAppState',(_,data)=>{
            this.setState(data)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(token);
    }
    render() {
        const { dataList:infoList,isLoading,isFirst,err } = this.state;
        return (
            <div className="row">
                {
                    isFirst?<h2>欢迎使用，输入关键字，随后点击搜索</h2>:
                    isLoading?<h2>Loading...</h2>:
                    err?<h2 style={{color: 'red'}}>{'error'}</h2>:
                    infoList.map(item => {
                        return (
                            <div className="card" key={item.id}>
                                <a href={item.html_url} target="_blank" rel="noreferrer">
                                    <img alt='avatar' src="{item.avatar_url}" style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{item.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
