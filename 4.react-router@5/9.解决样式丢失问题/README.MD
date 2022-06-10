# 多级路由路径下刷新，文件找不到
<MyNavLink to='/test/about' >About</MyNavLink>
<Route path="/test/about" component={About} />

http://localhost:3000 点击About 跳转到 http://localhost:3000/test/about
跳转完成之后点击刷新，发现页面可以正常显示，但是样式丢失，为什么？

首先点击刷新，会把url当作目标地址去发起网络请求，肯定会返回404 not found
但是react脚手架已经做好了webpack配置，匹配不到资源时返回首页index.html，所以页面还可以显示内容
返回首页之后开始渲染页面 <link ref='./css/bootstrap.css'>
就会去请求下载css资源 目标路径时http://localhost:3000/test/css/bootstrap.css 自然找不到资源
由于找不到资源，又会返回index.html

# 解决方式
1. <link rel="stylesheet" href="/css/bootstrap.css">
   将index.html中的引入修改为 / 到根目录下去寻早资源
2. <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css">
   %PUBLIC_URL%表示public的绝对路径
3. 不修改路径，使用hashRouter，不会将路由path带着去请求服务器
