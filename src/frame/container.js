import React from 'react'
import Menu from './menu'
import Header from './header'
class Container extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <Menu />
        <Header />
        {this.props.children}
      </div>
    )
  }
}
export default Container