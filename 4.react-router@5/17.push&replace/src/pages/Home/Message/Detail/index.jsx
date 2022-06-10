import React, { Component } from 'react';
// import QueryString from 'query-string';
const detailData = [
    { id: '01', content: '你好，dk' },
    { id: '02', content: '你好，lzz' },
    { id: '03', content: '你好，cy' }

]
export default class Detail extends Component {
    render() {
        // 接收params参数
        // const { id, title } = this.props.match.params;

        // 接收search参数 search参数并没有整理好到一个对象中
        // const { id, title } = QueryString.parse(this.props.location.search.slice(1));

        // 接收state参数，默认为undefined
        const { id, title } = this.props.location.state||{};

        const { content } = detailData.find(item => item.id===id)||{};
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{content}</li>
            </ul>
        )
    }
}
