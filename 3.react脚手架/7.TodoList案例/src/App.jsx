// 创建外壳组件
import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List'
import Footer from './components/Footer';
import './App.css'

class App extends Component {
    state = {
        todos: [{ id: '001', todo: '吃饭', 'done': true },
        { id: '002', todo: '睡觉', 'done': false },
        { id: '003', todo: '写代码', 'done': true },
        { id: '004', todo: '逛街', 'done': false },
        ]
    }
    addTodo=(todo)=>{
        const {todos}=this.state;
        // 追加一个todo
        const newTodos=[todo,...todos]
        // todos.unshift(todo);
        this.setState({ todos: newTodos})
    }
    updateTodo=(id,done)=>{
        const {todos}=this.state;
        for(let todo of todos){
            if(todo.id===id){
                todo.done=done;
                break;
            }
        }
        this.setState({todos: todos})

    }
    deleteTodo=(id)=>{
        const {todos} = this.state;
        const index=todos.findIndex(item=>item.id===id);
        todos.splice(index, 1);
        this.setState({todos: todos});
    }
    changeAllTodo=(bool)=>{
        const { todos } = this.state;
        for(let item of todos){
            item.done=bool;
        }
        this.setState({todos: todos});
    }
    ClearAllDone=()=>{
        const {todos}=this.state;
        const newtodos=todos.filter(todo=>!todo.done);
        this.setState({todos: newtodos});
    }
    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} changeAllTodo={this.changeAllTodo} ClearAllDone={this.ClearAllDone}/>
                </div>
            </div>
        )
    }
}

export default App;