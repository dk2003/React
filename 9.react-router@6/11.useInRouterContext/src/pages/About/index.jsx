import React from 'react';
import { useInRouterContext} from 'react-router-dom'

export default function About() {
    console.log(useInRouterContext());
    return (
        <div>
            <h3>我是About的内容</h3>
        </div>
    )
}
