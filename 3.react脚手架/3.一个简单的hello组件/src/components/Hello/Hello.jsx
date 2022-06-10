// 创建hello组件
import React, { Component } from 'react';
import './Hello.css';
class Hello extends Component {
    render() {
        return (
            <h2 className='title'>
                hello,react!
            </h2>
        )
    }
}

export default Hello;