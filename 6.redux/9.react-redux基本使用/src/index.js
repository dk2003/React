// 引入react核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
import App from './App'
import store from './redux/store';
import {Provider} from 'react-redux'
// 渲染APP到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React.StrictMode这个内置组件可以检查App组件的合理性
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
// 监听到store的变化 直接重新渲染页面
// store.subscribe(() => {
//     root.render(
//         // React.StrictMode这个内置组件可以检查App组件的合理性
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     );
// })

