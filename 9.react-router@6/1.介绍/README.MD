# React Router 6
1. 概述
react router6在2021-11成为了默认版本，使用npm默认安装的就是6版本

2. react-router以三个不同的包发布到npm上，分别为
* react-router：路由的核心库，提供了很多的：组件、钩子
* react-router-dom：包含react-router的所有内容，并且添加一些专门用于DOM的组件，例如<BrowserRouter>等
  - 专门用于编写web应用
* react-router-native：包含react-router所有内容，并且专门添加一些用于ReactNative的API，例如<NativeRouter>
  - 专门用于编写react-native应用
  
3. 与react-router5相比，改变了什么？
* 内置组件的变化：移除<Switch/>，新增<Routes/> 等
* 语法的变化：component={About}变为element={<About/>} 等
* 新增多个hook：useParams,useNavigate,useMatch 等
* 官方明确推荐函数式组件