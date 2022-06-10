# 限制props类型
<script src="../../lib/react全家桶资料/03_依赖包/新版本/prop-types.js"></script>

```js
// 指定必要性和类型
Person.propTypes ={
    // name:React.PropTypes.string,
    age:PropTypes.string.isRequired,
    // 在react15之后React.PropTypes这种判断类型的形式被弃用了
    // react16及之后PropTypes的使用需要另外引入
    // string表示需要一个字符串，isRequired表示必须传递
    sex: PropTypes.string,
    speak: PropTypes.func
    // 为什么要写func而不是function？防止与js中的function关键字产生冲突
}
// 指定默认值
Person.defaultProps={
    sex:'不男不女',
    age:99
}
```