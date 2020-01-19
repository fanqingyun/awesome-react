import React from 'react'
class Home extends React.Component {
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h1>这是首页</h1>
      </div>
    )
  }
}
export default Home