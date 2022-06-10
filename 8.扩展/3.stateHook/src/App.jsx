import React, { Component } from 'react';
import Demo from './components/3.hooks';
import { BrowserRouter } from 'react-router-dom';


// import './App.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Demo/>
            </BrowserRouter>
        )
    }
}
