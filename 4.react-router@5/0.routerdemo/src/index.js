// 引入react核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import App from './App'

// 渲染APP到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React.StrictMode这个内置组件可以检查App组件的合理性
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);