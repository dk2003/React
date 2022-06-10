import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/Home/News'
import Message from '../pages/Home/Message'
import Detail from '../pages/Home/Message/Detail'
import {  Navigate } from 'react-router-dom';

const routes=[
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path:'news',
                element: <News />
            },
            {
                path:'message',
                element: <Message />,
                children: [
                    { 
                        path: 'detail/:id/:title',
                        element: <Detail test={1}/>
                    },
                    { 
                        path: '/home/message',
                        element: <Navigate to='detail/1/Msg1' />
                    }
                ]
            },
            {
                path: '/home',
                element: <Navigate to='message' />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    }
]

export default  routes