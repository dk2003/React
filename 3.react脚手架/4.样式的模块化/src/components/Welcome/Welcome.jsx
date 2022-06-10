// 创建welcome组件
import React, { Component } from 'react';
import welcome from './Welcome.module.css';
class Hello extends Component {
    render() {
        return (
            <h2 className={welcome.demo}>
                Welcome
            </h2>
        )
    }
}

export default Hello;