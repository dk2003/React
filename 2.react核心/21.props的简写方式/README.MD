# 注意事项
1. props是只读的，不允许在组件内部修改
2. 使用class的静态属性来为类自身添加属性
3. 使用static来简写props
```js
class Person extends React.Component {
   state = {
       name: 'tom',
       age: 18,
       sex: '男'
   }
   render() {
       // 下面这一行代码会报错，因为props是只读的
       // this.props.name='jack'
       return (
           <ul>
               <li>姓名:{this.props.name}</li>
               <li>性别:{this.props.sex}</li>
               <li>年龄:{this.props.age + 1}</li>
           </ul>
       )
   }
   // 使用静态属性来设置props的限制
   static propTypes = {
       age: PropTypes.string.isRequired,
       sex: PropTypes.string,
       speak: PropTypes.func

   }
   static defaultProps = {
       sex: '不男不女',
       age: 99
   }
}
```