import React from 'react'
import { increase, decrease } from '../../actions/index';
import { connect } from 'react-redux';

class UserManage extends React.Component {
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    const { PayIncrease, PayDecrease } = this.props;

    return (
      <div>
       这是用户管理
        <h2>当前{this.props.tiger}</h2>
        <button onClick={PayIncrease}>增加</button>
        <button onClick={PayDecrease}>减少</button>
      </div>
    )
  }
}
UserManage = connect(mapStateToProps, mapDispatchToProps)(UserManage)
export default UserManage
//需要渲染什么数据
function mapStateToProps(state) {
  return {
      tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
      PayIncrease: () => dispatch(increase),
      PayDecrease: () => dispatch(decrease)
  }
}