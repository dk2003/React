import React, { Component } from 'react';
import Demo from './components/8.ErrorBoundary/Parent';


// import './App.css';

export default class App extends Component {
    render() {
        return (
                <Demo {...this.props}/>
        )
    }
}
