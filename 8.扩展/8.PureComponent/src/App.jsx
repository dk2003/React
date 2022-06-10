import React, { Component } from 'react';
import Demo from './components/6.optimize';


// import './App.css';

export default class App extends Component {
    render() {
        return (
                <Demo {...this.props}/>
        )
    }
}
