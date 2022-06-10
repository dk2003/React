import React from 'react';
import { useInRouterContext,useNavigationType} from 'react-router-dom'

export default function About() {
    console.log(useInRouterContext());
    console.log(useNavigationType());
    return (
        <div>
            <h3>我是About的内容</h3>
        </div>
    )
}
