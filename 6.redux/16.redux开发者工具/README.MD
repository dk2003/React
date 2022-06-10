# redux开发者工具
* 首先在浏览器中安装redux开发者工具的扩展程序
* 下载配置完毕之后还不能立即使用开发者工具
* 还需要再代码中进行一些操作

1. 安装辅助库
   cnpm i redux-devtools-extension
2. 使用
    import {composeWithDevTools} from 'redux-devtools-extension';
    ···
    export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

