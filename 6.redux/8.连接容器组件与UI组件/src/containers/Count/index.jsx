// 引入CountUI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


// 使用connect()() 创建并且暴露Count的容器组件
export default connect()(CountUI)
