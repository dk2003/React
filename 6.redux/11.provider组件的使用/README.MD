# Provider
* provider可以为所有的容器组件传递store
import store from './redux/store';
import {Provider} from 'react-redux'
root.render(
    // React.StrictMode这个内置组件可以检查App组件的合理性
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
* 不需要单独为容器组件传递store
* 不需要自己单独监测redux数据的变化从而来更新视图
