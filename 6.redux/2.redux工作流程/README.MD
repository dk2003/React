# redux
* redux的三个核心概念
1. action 
- 动作的对象
- 包含两个属性
  type：标识属性，值位字符串，唯一，必要属性
    初始化的值为@@init
  data：数据属性，值类型任意，可选属性
    初始化时不传递
- 例子：{type:'ADD_STUDENT',data:{name:'tom','age':18}}
2. reducer
- 用于初始化状态，加工状态
  初始化时previousState值为undefined
- 加工时，根据旧的state和action，产生新的state的纯函数
3. store
- 将state、action、reducer联系在一起的对象
