# 按需引入
* 对脚手架的配置进行自定义设置
  那么怎么暴露出脚手架的自定义配置？
  npm run eject:会生成一个config文件夹，包含了脚手架所有的默认配置
  但是这样进行修改，对项目的风险比较高，任何一个错误的修改都可能导致项目无法启动
  使用以下方法进行修改比较合理

# 修改配置
0. 自定义配置
   在根目录创建一个config-overrides.js用于修改默认配置
   babel-plugin-import是一个用于加载组件代码和样式的babel插件
   安装这个库并且在config-overrides.js进行相关的配置即可按需引入
   cnpm i babel-plugin-import -s
   配置：
   const {override,fixBabelImports}=require('customize-cra');
   module.exports=override(
       fixBabelImports('import',{
           libraryName:'antd',
           libraryDirectory:'es',
           style:'css'
       })
   );
1. 安装customize-cra去执行自定义配置
   cnpm i customize-cra -s
2. 使用了自定义配置之后就不能使用npm start直接启动项目了
   需要安装react-app-rewired去辅助启动项目，才会去识别配置文件
   cnpm i react-app-rewired -s
   修改package.json中的短命令配置
   before:
      "scripts": {
         "start": "react-scripts start",
         "build": "react-scripts build",
         "test": "react-scripts test",
         "eject": "react-scripts eject"
      },
   after:
       "scripts": {
         "start": "react-app-rewired start",
         "build": "react-app-rewired build",
         "test": "react-app-rewired test",
         "eject": "react-scripts eject"
       },
   
# 配置完毕之后就完成了样式的按需引入，不必在开头配置