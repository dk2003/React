import React, { Component } from 'react';
import Demo from './components/3.hooks';


// import './App.css';

export default class App extends Component {
    render() {
        return (
                <Demo {...this.props}/>
        )
    }
}
