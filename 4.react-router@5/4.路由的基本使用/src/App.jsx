import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'



// import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-xs-2 col-xs-offset-2">
                                <div className="list-group">
                                    {/* <a className="list-group-item" href="./about.html">About</a>
                                <a className="list-group-item active" href="./home.html">Home</a> */}
                                    {/* 编写路由连接 */}
                                    <Link className="list-group-item" to="/about">About</Link>
                                    <Link className="list-group-item active" to="/home">Home</Link>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        {/* 组测路由 */}
                                        <Route path="/about" component={About} />
                                        <Route path="/Home" component={Home} />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
