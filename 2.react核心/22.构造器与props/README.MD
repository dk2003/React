# 构造器中的props
* 在react组件挂载之前，会调用它的构造函数。
* 在为React.Component子类实现构造函数时，应该在其他语句之前调用super(props)
* 否则，this.props在构造函数中可能会出现未定义的bug
  
* 简而言之，如果要在构造器中使用this.props，就需要实现将调用super(props)将其初始化
  否则访问到的就是undefined

* 在构造函数中不能修改props，不管是通过this.props还是直接通过props