import React, { Component } from 'react';
import 'antd/dist/antd.min.css';
import { WechatOutlined, WeiboOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Timeline, DatePicker,Space } from 'antd';

export default class App extends Component {
    onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    render() {
        return (
            <div>
                App
                <button>点我</button>
                <br />
                <Button type='primary' icon={<SearchOutlined />}>按钮1</Button>
                <Button>按钮2</Button>
                <Button type='link'>按钮3</Button>
                <WechatOutlined />
                <WeiboOutlined />
                <hr />
                <Timeline>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
                <hr />
                <Space direction="vertical">
                    <DatePicker onChange={this.onChange} />
                    <DatePicker onChange={this.onChange} picker="week" />
                    <DatePicker onChange={this.onChange} picker="month" />
                    <DatePicker onChange={this.onChange} picker="quarter" />
                    <DatePicker onChange={this.onChange} picker="year" />
                </Space>
            </div>
        )
    }
}
