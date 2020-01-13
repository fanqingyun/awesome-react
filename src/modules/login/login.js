import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const element = (
  <button>测试</button>
);
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    return (
      <div className="login-bg">
        
      </div>
    )
  }
}