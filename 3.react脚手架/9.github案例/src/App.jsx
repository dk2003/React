import React, { Component } from 'react';
import Search from './components/Search';
import List from './components/List';

// import './App.css';

export default class App extends Component {
    state = {
        dataList: [],
        isFirst:true,
        isLoading:false,
        err:'',  //存储请求相关的错误信息

    }
    getInfo=(info)=>{
        this.setState({ dataList: info })
    }
    updateAppState=(stateObj)=>{
        this.setState(stateObj)
    }
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
