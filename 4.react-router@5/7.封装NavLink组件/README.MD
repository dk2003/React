# children
* 标签体中的内容也是一个特殊的标签属性，可以通过props.children来获取
* 标签体中的内容也可以通过children来设置

    <MyNavLink to='/about' >About</MyNavLink>

    export default class MyNavLink extends Component {
    render() {
        return (
            <NavLink activeClassName='active' className="list-group-item" {...this.props}/>
            <!-- 接收到to和children -->
            <!-- 再传递给NavLink组件 -->
        )
    }
}
