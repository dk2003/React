import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
    getStudentData=async ()=>{
        let res = await axios.get('/api1/students');
        if (res.status===200){
            console.log(res.data);
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
            </div>
        )
    }
}
