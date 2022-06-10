# Axios
* 轻量级，建议使用
  - 封装XML对象的ajax
  - promise风格
  - 可以使用在浏览器端和node服务器端

* 安装
  cnpm i -axios -s

# proxy
1. 方式1
* 在package.json中设置
  "proxy":"http://localhost:5000"
* 当前域没有的资源会由代理服务器转发到5000
* 当前域有的资源不会转发
* 这样只能配置一个目标服务器

2. 方式2
   见另一个md文档