import config from './config'
import React from 'react'
import { HashRouter, Route, Redirect, Switch, Link, NavLink } from 'react-router-dom';

class CustomeRoutes extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          {config.map(({ path, component }, index) => (
            <Route
              key={index}
              exact
              path={path}
              component={component}
            />
          ))}
          <Route path='/' render={() =>
            <Redirect to='/login'></Redirect>}>
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default CustomeRoutes