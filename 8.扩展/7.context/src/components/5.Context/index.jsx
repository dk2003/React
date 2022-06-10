import React, { Component } from 'react'


// 创建context对象
const MyContext=React.createContext();
// const {Provider}=MyContext;
export default class A extends Component {
    state={username:'tom'}
    render() {
        return (
            <div>
                <h3>我是A组件</h3>
                <h4>我的用户名是{this.state.username}</h4>
                <MyContext.Provider value={this.state.username}>
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}

class B extends Component {
    static contextType = MyContext;

    render() {
        console.log(this);
        return (
            <div>
                <h3>我是B组件</h3>
                <h4>我从A组件接收到的用户名{this.context}</h4>
                <C/>
            </div>
        )
    }
}


// 类式组件的使用
// class C extends Component {
//     static contextType = MyContext;
//     render() {
//         return (
//             <div>
//                 <h3>我是C组件</h3>
//                 <h4>我从A组件接收到的用户名{this.context}</h4>
//             </div>
//         )
//     }
// }



// 函数式组件的使用
function C(){
    return (
        <div>
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名
                <MyContext.Consumer>
                    {value=>value}
                </MyContext.Consumer>
            </h4>
        </div>
    )
}
