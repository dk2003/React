# ref回调调用次数
* 如果ref回调函数是以内联函数(将函数体直接放入标签中)的方式定义的
* 那么更新时调用render函数时,ref回调函数会执行两次，第一次传递的参数是null，第二次传递的参数是dom元素 
* 这是因为在每次渲染时会创建一个新的函数实例，[清空旧的ref并且设置新的]
* 通过将ref的回调函数写为class的绑定函数的方式可以避免上述问题
* 大多数情况下这是无关紧要的

# 非内联函数
{<input type="text" ref={this.saveInput} />}
saveInput=c=>{ this.input1 = c;console.log('@1');}
更新时只会输出一遍
{<input type="text" ref={c=>{this.input=c;console.log('@',c)}}/>}
更新时会输出两遍


