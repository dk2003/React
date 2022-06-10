import React, { Component } from 'react';
import Demo from './components/2.lazyLoad';
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
