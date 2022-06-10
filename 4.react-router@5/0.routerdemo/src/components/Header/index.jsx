import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {
    back=()=>{
        // 怎么在非路由组件中使用路由组件的props？？？
        this.props.history.goBack();
    };
    forward=()=>{
        this.props.history.goForward();
    }
    go=()=>{
        this.props.history.go(1);
    }
    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <hr />
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}

// withRouter可以接收一个一般组件，可以让一般组件使用路由组件的props
export default withRouter(Header)