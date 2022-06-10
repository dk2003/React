# HOOK
1. react HOOK/HOOKS是什么？
   - Hook是react 16.8.0版本增加的新特性/语法
   - 可以让开发者在函数组件中使用state以及其他的react特性(例如生命周期钩子)
2. 三个常用的Hook
   - State Hook：React.useState()
   - Effect Hook：React.useEffect()
   - Ref Hook:React.useRef()
3. State Hook
   - State Hook让函数组件也可以又state状态，并进行状态数据的读写操作
   - 语法：const [xxx,setXxx]=React.useState(initValue)
   - useState()说明：
      - 参数：第一次初始化指定在内部做缓存
      - 返回值：包含两个元素的数组，第一个为内部当前状态，第二个为更新状态的函数
   - setXxx()两种写法：
      - setXxx(newValue)：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
      - setXxx(value=>newValue)：参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值