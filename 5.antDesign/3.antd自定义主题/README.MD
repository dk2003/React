# 自定义主题
按照 配置主题 的要求，自定义主题需要用到 less 变量覆盖功能。我们可以引入 customize-cra 中提供的 less 相关的函数 addLessLoader 来帮助加载 less 样式，同时修改 config-overrides.js 文件如下。

$ yarn add less less-loader
- const { override, fixBabelImports } = require('customize-cra');
+ const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
-   style: 'css',
+   style: true,
  }),
+ addLessLoader({
+   javascriptEnabled: true,
+   modifyVars: { '@primary-color': '#1DA57A' },
+ }),
);
这里利用了 less-loader 的 modifyVars 来进行主题配置，变量和其他配置方式可以参考 配置主题 文档。

修改后重启 yarn start，如果看到一个绿色的按钮就说明配置成功了。

你也可以使用 craco 和 craco-antd 来实现和 customize-cra 一样的修改 create-react-app 配置的功能。
