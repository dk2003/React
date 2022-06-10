# context
* 理解：一种组件间的通信方式，常用于【祖组件】与【后代组件】间通信

* 使用
1. 创建Context容器对象
   const XxxContext=React.createContext()
2. 渲染子组件时，外面包裹xxxContext.Provider，通过value属性给后代传递数据
   <xxxContext.Provider value={数据}>
   </xxxContext.Provider>
3. 后代组件读取数据
   - 第一种方式
        static contextType=xxxContext
        ···
        this.context    即可读取context中的value数据

   - 第二种方式
        <xxxContext.Consumer>
        {
            value=>(    // value就是context中value的数据
                <!-- 要显示的内容 -->
            )
        }
        </xxxContext.Consumer>