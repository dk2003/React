import React, { Component } from 'react';
import Demo from './components/7.renderProps';


// import './App.css';

export default class App extends Component {
    render() {
        return (
                <Demo {...this.props}/>
        )
    }
}
