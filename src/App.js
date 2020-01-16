import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions/index';
import 'antd/dist/antd.css';
import Login from './modules/login/Login'
import { DatePicker } from 'antd';
// import Button from './Button.js'
// 引入路由

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  getUser () {
    return {
      name: 123,
      password: 111
    }
  }
  onClick () {
    this.props.dispatch(increment())
  }
  onClick2 () {
    this.props.dispatch({ type: 'INCREMENT_ASYNC' })
  }
  render () {
    const user = this.getUser()
    return (
      <div>
        <Login username="用户名" password="密码" />
      </div>
    );
  }
}
export default connect(
  state => ({
    number: state.number
  })
)(App);
function Home (props) {
  return (
    <div>
      <h2>{props.password}</h2>
    </div>
  );
}

function About (props) {
  return (
    <div>
      <h2>about</h2>
      <h2>{props.user.name}</h2>
    </div>
  );
}

class Dashboard extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <h2>Dashboard</h2>
        <h2>{this.props.user.name}</h2>
      </div>
    );
  }
}
// export default App;
