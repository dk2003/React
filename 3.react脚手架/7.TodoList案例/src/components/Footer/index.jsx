import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    handleCheckAll=(e)=>{
        const { changeAllTodo}=this.props;
        changeAllTodo(e.target.checked);
    }
    handleClearAllDone=()=>{
        const { ClearAllDone}=this.props;
        ClearAllDone();
    }
    render() {
        const {todos}=this.props;
        // 已经完成的个数
        const doneCount=todos.reduce((before,current)=>{
            return before+(current.done?1:0);
        },0)
        const total=todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount===total&&total!==0} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}
