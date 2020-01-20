import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions/index';
// 引入菜单
import CustomeRoutes from './router/routes'

class App extends React.Component {
  onClick () {
    this.props.dispatch(increment())
  }
  onClick2 () {
    this.props.dispatch({ type: 'INCREMENT_ASYNC' })
  }
  render () {
    return (
      <div>
        <CustomeRoutes />
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
