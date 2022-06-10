# 回调形式的ref
* 上文提到的字符串形式的ref已经不被react官方推荐使用了，很可能以后就被废弃了

# string类型的refs存在的问题
* 效率上的问题

# 样例
```js
class Demo extends React.Component {
    showData = () => {
        console.log(this.input1.value);
    }
    showData1 = () => {
        console.log(this.refs.input2.value);
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="点击按钮提示数据" ref={c=>this.input1=c} />
                <button onClick={this.showData}>点我提示数据</button>
                <input type="text" placeholder="失去焦点提示数据" onBlur={this.showData1} ref='input2' />
            </div>
        )
    }
}
```