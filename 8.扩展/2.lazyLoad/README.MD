1. 引入
import React, { Component, Suspense, lazy } from 'react';
2. 使用
const Home = lazy(() => import('./Home') )
const About = lazy(() => import('./About') )
3. 组测路由：必须用Suspense包裹而且指明fallback表示加载路由过程中显示的内容
<Suspense fallback={<h1>Loading...</h1>}>
    {/* 组测路由 */}
    <Route path="/about" component={About} />
    <Route path="/Home" component={Home} />
</Suspense>
