import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions/index';
import 'antd/dist/antd.css';
// 引入菜单
import Container from './frame/container'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick () {
    this.props.dispatch(increment())
  }
  onClick2 () {
    this.props.dispatch({ type: 'INCREMENT_ASYNC' })
  }
  render () {
    return (
      <div>
        <Container />
      </div>
    );
  }
}
export default connect(
  state => ({
    number: state.number
  })
)(App);
// export default App;
