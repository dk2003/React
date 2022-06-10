# UUID 生成唯一标识符
* 安装
  cnpm i nanoid -s
* 引入
  import {nanoid} from 'nanoid';
* 使用
  nanoid()
  
# PropTypes 对props进行类型限制
* 安装
  cnpm i prop-types -s
* 引入
  import PropTypes from 'prop-types'
* 使用
  ```js
  static propTypes = {
      todos: PropTypes.array.isRequired,
      updateTodo: PropTypes.func.isRequired,
      deleteTodo: PropTypes.func.isRequired,
  }
  ```

# 如何确定将数据放在哪个组件的state中
1. 某个组件使用：放在组件自生
2. 某些组件使用：放在他们公共的父组件中(官方叫做：状态提升)