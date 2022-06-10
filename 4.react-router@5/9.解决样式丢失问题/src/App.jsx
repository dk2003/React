import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink';

// import './App.css';
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <Header />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/* <a className="list-group-item" href="./about.html">About</a>
                                <a className="list-group-item active" href="./home.html">Home</a> */}
                                {/* 编写路由连接 */}
                                <MyNavLink to='/test/about' >About</MyNavLink>
                                <MyNavLink to='/test/home' >Home</MyNavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/* 组测路由 */}
                                    <Switch>
                                        <Route path="/test/about" component={About} />
                                        <Route path="/test/home" component={Home} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
