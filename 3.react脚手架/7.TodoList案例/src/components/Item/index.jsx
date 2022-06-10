import React, { Component } from 'react';

import './index.css'
export default class Item extends Component {
    state = {
        showBtn: false
    }
    handleMouse = (bool) => {
        return () => {
            this.setState({ showBtn: bool })
        }
    }
    handleCheck = (id) => {
        return (e) => {
            this.props.updateTodo(id, e.target.checked)
        }
    }
    handleDelete=(id)=>{
        const { deleteTodo}=this.props;
        // 前面一定要window
        if(window.confirm('确定删除该事项吗？')) deleteTodo(id);
    }
    render() {
        const { todo, done, id } = this.props;
        const { showBtn } = this.state;
        return (
            <li style={{ backgroundColor: showBtn ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    {/* defaultChecked表示【初始】展示状态，可以修改勾选框的状态 */}
                    {/* 如果直接使用checked，那么勾选框的状态一直是done，不可修改 */}
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{todo}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{ display: showBtn ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
