import React, { Component } from 'react'

const detailData = [
    { id: '01', content: '你好，dk' },
    { id: '02', content: '你好，lzz' },
    { id: '03', content: '你好，cy' }

]
export default class Detail extends Component {
    render() {
        const { id, title } = this.props.match.params;
        const { content } = detailData.find(item => item.id===id);
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{content}</li>
            </ul>
        )
    }
}
