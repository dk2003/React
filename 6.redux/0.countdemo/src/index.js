// 引入react核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
import App from './App'
import { Provider } from 'react-redux';
import store from './redux/store'
// 渲染APP到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React.StrictMode这个内置组件可以检查App组件的合理性
    <React.StrictMode>
        {/* 此处需要用Provider包裹App。目的是让App的所有后代容器组件都可以接收到store */}
        {/* 给容器组件传递store */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
