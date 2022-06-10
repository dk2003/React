import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import './index.css'

export default class Header extends Component {
    // 对props类型进行类型、必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    handleKeyUp = (e) => {
        const { addTodo}=this.props;
        const {keyCode,target}=e;
        if (keyCode !== 13) return;
        if(target.value.trim()==='') return alert('输入不能为空');
        addTodo({ id: nanoid(),todo:target.value,done:false});
        target.value='';

    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
