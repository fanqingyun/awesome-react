import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions/index';
import 'antd/dist/antd.css';
import Login from './modules/login/login'
import { DatePicker } from 'antd';
// import Button from './Button.js'
// 引入路由
import { HashRouter, BrowserRouter as Router, Route, Redirect, Switch, Link, NavLink } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  getUser() {
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
      <Router>
        <div>
          <div>
            <Login username="用户名" password="密码"/>
            <DatePicker />
            <div>current number: {this.props.number} <button onClick={() => this.onClick()}>点击+1</button></div>
            <div>current number: {this.props.number} <button onClick={() => this.onClick2()}>点击2秒后+1</button></div>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home {...user}/>
            </Route>
            <Route path="/about">
              <About user={ this.getUser() } />
            </Route>
            <Route path="/dashboard">
              <Dashboard user={user} />
            </Route>
          </Switch>
        </div>
      </Router>
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
