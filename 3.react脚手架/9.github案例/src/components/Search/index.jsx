import React, { Component } from 'react';
import axios from 'axios';
// import './index.css'

export default class Search extends Component {
    search=async ()=>{
        const { updateAppState}=this.props;
        // 解构赋值的连续写法 并且将获取到的value重命名为data
        const { keywordNode:{value:data} } = this;
        updateAppState({isFirst:false,isLoading:true})
        // 发送网络请求
        let res = await axios.get(`/api1/search/users2?q=${data}`)
        updateAppState({isLoading: false })
        if(res.status===200){
            updateAppState({ dataList: res.data.items})
        }else{
            updateAppState({ err:'请求失败' })
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
