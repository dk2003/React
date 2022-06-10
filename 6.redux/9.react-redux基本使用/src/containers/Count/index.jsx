// 引入CountUI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action_creator'

// 该函数返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value————状态
function mapStateToProps(state) {
    return {
        count: state
    }
}

// 该函数返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value————操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        jia: num =>
            dispatch(createIncrementAction(num))
        ,
        jian: num =>
            dispatch(createDecrementAction(num))
        ,
        laterJia: num =>
            dispatch(createIncrementAsyncAction(num,500))
    }
}


// 使用connect()() 创建并且暴露Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
