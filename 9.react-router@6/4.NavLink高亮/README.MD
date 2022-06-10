# NavLink
<NavLink className="list-group-item" to='/home'>Home</NavLink>
当当前的路由与该路由链接匹配的时候，NavLink会添加一个默认类名叫做active

<NavLink className="list-group-item" activeClassName='atguigu' to='/home'>Home</NavLink>
react-router-dom@5版本的时候通过activeClassName属性可以自定义指定路由匹配超过时添加的类名
在react-router-dom@6中，这种写法改变了

<NavLink className={({ isActive }) => isActive ? 'list-group-item active' : 'list-group-item'} to='/home'>Home</NavLink>
在react-router-dom@6中，NavLink需要自定义选中时的类名，需要为className传递一个函数，这个函数会在初始渲染以及路由选中时执行
这个函数可以接收到一个参数{isActive:boolean} 这个对象的isActive表示该路由有没有被选中，这个函数的返回值会作为NavLink的类名


