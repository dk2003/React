# 消息订阅与发布
* vue中双向数据绑定的原理

# 订阅消息
1. 消息名
2. 发布消息

# PubSubJS
* 安装
  cnpm i pubsub-js -s
* 引入
  import PubSub from 'pubsub-js'
* 使用
  - 订阅
    let token = PubSub.subscribe('Topoc',mySubscriber)
  - 发布
    PubSub.publish('Topoc', 'hello')
  - 取消订阅
    PubSub.unsubscribe(token)