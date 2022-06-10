# mapDispatch
// 使用connect()() 创建并且暴露Count的容器组件
export default connect(
    state => ({ count: state }),
    // 第二个参数mapDispatchToProps可以不写成函数
    /* dispatch => ({
        jia: num => dispatch(createIncrementAction(num)),
        jian: num => dispatch(createDecrementAction(num)),
        laterJia: num => dispatch(createIncrementAsyncAction(num, 500))
    }) */

    // mapDispatchToProps写成对象形式
    // 只需要传递相应可以生成action的函数
    // 生成action之后，只需要提供action，react-redux就可以自动调用dispatch分发
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        laterJia: createIncrementAsyncAction
    }
)(CountUI)