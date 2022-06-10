# getSnapshotBeforeUpdate
* 该函数的返回值将会传递给componentDidUpdate
* componentDidUpdate接收三个参数，prevProps、prevState、snapshotValue
* 这个钩子可以用来获取dom更新之前的一些信息，例如滚轮的位置等等
* 此用法并不常见