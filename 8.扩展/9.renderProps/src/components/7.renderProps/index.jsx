import React, { Component } from 'react'

export default class Parent extends Component {
    render() {
        return (
            <div>
                <h3>我叫parent组件</h3>
                {/* <A>
                    <B/>
                </A> */}

                <A render={(name)=><B name={name}/>}/>
            </div>
        )
    }
}

class A extends Component {
    state={name:'tom'}
    render() {
        return (
            <div>
                <h3>我叫A组件</h3>
                {/* {this.props.children} */}
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div>
                <h3>我叫B组件</h3>
                <h3>来自A组件的name:{this.props.name}</h3>
            </div>
        )
    }
}
