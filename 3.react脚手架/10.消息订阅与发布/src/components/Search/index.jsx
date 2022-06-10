import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';
// import './index.css'

export default class Search extends Component {
    search=async ()=>{
        // 解构赋值的连续写法 并且将获取到的value重命名为data
        const { keywordNode:{value:data} } = this;
        PubSub.publish('updateAppState', { isFirst: false, isLoading: true});
        // 发送网络请求
        let res = await axios.get(`/api1/search/users2?q=${data}`);
        PubSub.publish('updateAppState', { isLoading: false })
        if(res.status===200){
            PubSub.publish('updateAppState', { dataList: res.data.items })

        }else{
            PubSub.publish('updateAppState', { err: '请求失败' })
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={c=>this.keywordNode=c}/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
