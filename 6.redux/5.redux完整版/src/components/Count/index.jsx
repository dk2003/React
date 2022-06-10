import React, { Component } from 'react';
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'
// 引入actionCreator，用于创建action对象
import { createIncrementAction, createDecrementAction} from '../../redux/count_action_creator'

export default class Count extends Component {
    state = { carName: '奔驰c63' };
    // componentDidMount(){
    //     // 检测redux中状态的变化，只要状态变化就调用render
    //     store.subscribe(()=>{
    //         this.forceUpdate();
    //     })
    // }
    increment = () => {
        const { value } = this.selectNumber;
        // 通知redux +value
        store.dispatch(createIncrementAction(value*1));
    }
    decrement = () => {
        const { value } = this.selectNumber;
        store.dispatch(createDecrementAction(value*1));

    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        const count=store.getState();
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1));
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber;
        setTimeout(() => {
            store.dispatch(createIncrementAction(value * 1));
        }, 500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
