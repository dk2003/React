import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        users: [
            { id: '001', name: 'dk', age: 18 },
            { id: '002', name: 'dk1', age: 19 },
            { id: '003', name: 'dk2', age: 20 },
            null
        ]
    }
    render() {
        return (
            <div>
                <h2>我是child组件</h2>
                {
                    this.state.users.map((user) => {
                        return (<h4 key={user.id}>
                            {user.name}____{user.age}
                        </h4>)
                    })
                }
            </div>
        )
    }
}
