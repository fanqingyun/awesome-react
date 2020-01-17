import config from './config'
import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Container from '../frame/container'
class CustomeRoutes extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          {config.map(({ path, Component }, index) => (
            <Route
              key={index}
              exact
              path={path}
              component={() => {
                return path === '/login' ? (<Component/>) : (
                  <Container>
                    <Component/>
                  </Container>
                )
              }}
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