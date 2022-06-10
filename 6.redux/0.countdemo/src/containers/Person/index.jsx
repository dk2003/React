import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { createAddPersonAction} from '../../redux/actions/person'



class Person extends Component {
    addPerson=()=>{
        const name=this.nameNode.value;
        const age = this.ageNode.value;
        const personObj={name,age,id:nanoid()};
        this.props.addPerson(personObj);
        this.nameNode.value=''
        this.ageNode.value=''
    }
    render() {
        const {people}=this.props;
        return (
            <div>
                <h2>我是Person组件</h2>
                <h4>上方求和为：{this.props.count}</h4>
                <input type="text" placeholder="输入姓名" ref={c => this.nameNode = c} />&nbsp;
                <input type="text" placeholder="输入年龄" ref={c => this.ageNode = c} />&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {people.map(person =><li key={person.id}>{person.name}————{person.age}</li>)}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state)=>({people:state.people,count:state.count}),
    {
        addPerson: createAddPersonAction
    }
)(Person)
