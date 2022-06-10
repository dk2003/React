# 编程式路由导航
1. 引入
import {useNavigate } from 'react-router-dom';
2. 使用
const navigate = useNavigate();
···
navigate(-1)
···
navigate('detail', {
   replace: true,
   state: {
       id: msg.id,
       title: msg.title
   }
})

