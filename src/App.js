import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './sass.scss';
import { connect } from 'react-redux';
import { increment } from './actions/index';

// import Button from './Button.js'
// 引入路由
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <Router>
        <div>
          <div>
            <div>current number: {this.props.number} <button onClick={() => this.onClick()}>点击+1</button></div>
            <div>current number: {this.props.number} <button onClick={()=>this.onClick2()}>点击2秒后+1</button></div>
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
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
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
function Home () {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About () {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard () {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
// export default App;
