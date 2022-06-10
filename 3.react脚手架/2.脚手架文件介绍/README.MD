# 文件介绍
1. node_modules：依赖文件
2. public：
   一般存放静态资源文件
   1. favicon.ico：页签图标
   2. index.html：单页面应用的模板
   3. robots.txt：爬虫规则文件，指定哪些文件可以爬取，哪些文件不能爬取
3. src
   1. APP.js：定义了一个App组件
        为什么需要App组件? 放入#app容器总的组件 相对于其他组件的父组件
   2. App.test.js：用于测试App.js
   3. index.css：全局通用的样式
   4. index.js：项目的入口文件
   5. logo.svg：react的logo图
   6. reportWebVitals.js：可以用来进行页面性能分析
   7. setupTestsz：用于做组件测试