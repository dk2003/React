// 创建hello组件
import React, { Component } from 'react';
import hello from './Hello.module.css';
class Hello extends Component {
    render() {
        return (
            <h2 className={hello.title}>
                hello,react!
            </h2>
        )
    }
}

export default Hello;