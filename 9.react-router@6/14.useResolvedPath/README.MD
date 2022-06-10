# useResolvedPath
* 作用：给定一个url值，解析其中的pathname、search、hash值
console.log(useResolvedPath('/user?id=001&name=tom#qwe'));
{pathname: '/user', search: '?id=001&name=tom', hash: '#qwe'}