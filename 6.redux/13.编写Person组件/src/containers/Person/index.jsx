import React, { Component } from 'react';
import { connect } from 'react-redux'

export default class Person extends Component {
    addPerson=()=>{
        const name=this.nameNode.value;
        const age = this.ageNode.value;

    }
    render() {
        return (
            <div>
                <h2>我是Person组件</h2>
                <input type="text" placeholder="输入姓名" ref={c => this.nameNode = c} />&nbsp;
                <input type="text" placeholder="输入年龄" ref={c => this.ageNode = c} />&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    <li>name——age</li>
                </ul>
            </div>
        )
    }
}
