# setState
* 我们发现，直接在事件回调中修改state中的数据，视图并不会随着数据的变化而改变
* 因为修改state中数据时，不可以直接更改，react没有进行数据劫持，因此并不会检测到状态的变化，需要用到setState方法
```js
demo(){
    this.setState({
        isHot:false
    })
}
```
* state中的数据只能读取，修改起不到实际作用

* 可以这样理解，react用的其实并不是state中的数据，react初始化组件的时候将state中的数据复制了一份当作真正依赖的数据
* 而state中的数据可以看作一份真正依赖数据的映射
* 通过setState可以进行真正的数据更新

# setState
* setState进行的是数据的合并，而不是数据的覆盖，修改单个数据，别的属性并不会丢失
* Object.assign

# react怎么实现的响应式？
* 当数据发生改变，会再次调用组件实例的render方法得到改变之后的虚拟dom，然后再将虚拟dom转化为真实dom挂载到页面上
* 所以render函数会多次调用，而不仅仅是在初始化的那次
* 但是constructor构造器函数只会调用一次

