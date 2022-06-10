# search参数(query)
* 传递search参数：<Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
* 组测路由，无需声明，正常组测即可
<Route path='/home/message/detail' component={Detail} />
* 接收参数
- 没有解析过的search参数存储在this.props.location的search属性中
* 解析query参数
1. 下载
cnpm i query-string -s
2. 引入
import QueryString from 'query-string';
3. 使用
const { id, title } = QueryString.parse(this.props.location.search.slice(1));
