import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {
    state={carName:'奔驰c36',stus:['a','b','c','d']}
    addStus=()=>{
        const {stus} = this.state;
        stus.unshift('e')
        // this.setState({stus:stus})
        this.setState({stus:['e',...stus]});
    }
    changeCar=()=>{
        // this.setState({carName:'迈巴赫'});


        // 在Component普通组件中，只要往setState中传入一个对象，就会引起render的调用
        // 在PureComponent纯组件中，如果传入的obj和之前的obj是同一个对象，不会引起render的调用
        // 因为纯组件会尽量减少无意义的render
        const obj=this.state;
        obj.carName='迈巴赫';
        this.setState(obj);
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     // nextProps,nextState是下一个即将要更新的props/state
    //     if (this.state.carName === nextState.carName) return false;
    //     else return true;
    // }
    render() {
        return (
            <div>
                <h3>我是parent组件</h3>
                <span>我的车名字是：{this.state.carName}</span>
                <br />
                <button onClick={this.changeCar}>点我换车</button>
                <button onClick={this.addStus}>点我添加学生</button>
                <Child carName={this.state.carName}/>
                {this.state.stus}
            </div>
        )
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.carName === nextProps.carName) return false;
    //     else return true;
    // }
    render() {
        return (
            <div>
                <h3>我是child组件</h3>
                <span>我接到的车是：{this.props.carName}</span>
            </div>
        )
    }
}