import React from 'react';
// 引入菜单
import CustomeRoutes from './router/routes'

class App extends React.Component {
  state = {
    test: 121212
  }
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <CustomeRoutes />
      </div>
    );
  }
}
// export default connect(
//   state => ({
//     ...state
//   })
// )(App);

//连接组件

export default App;
