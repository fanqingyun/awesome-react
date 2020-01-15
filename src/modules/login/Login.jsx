import React from 'react'
import './login.scss'
import { Form, Icon, Input, Button, Alert, message } from 'antd';
import Logo from './images/NBU-LOGO.png'
import { JSEncrypt } from 'jsencrypt'
class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clientWidth: `${document.documentElement.clientWidth}px`,
      clientHeight: `${document.documentElement.clientHeight}px`,
      username: '',
      password: ''
    }
  }
  resizeWin () {
    this.setState({
      clientWidth: `${document.documentElement.clientWidth}px`,
      clientHeight: `${document.documentElement.clientHeight}px`
    })
  }
  // 检查浏览器是否开启cookie
  checkEnableCookie () {
    return navigator.cookieEnabled
  }
  // 检查是否已经登录
  checkLoginStatus () {
    if (!this.checkEnableCookie) {
      return
    }
  }
  // 获取公钥
  getPublickey () {

  }
  // 登录
  handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

      }
    });
  }
  componentDidMount () {
    window.addEventListener('resize', this.resizeWin.bind(this))
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeWin.bind(this))
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    const alert = this.checkEnableCookie() ? null : (<Alert message="您的浏览器禁用了Cookie，无法正常访问本系统，请开启Cookie" type="warning" showIcon closable banner />)
    // let winStyle = 
    return (
      <div style={{ height: this.state.clientHeight }} className="login-bg">
        {alert}
        <div className="login-form">
          <img src={Logo} alt="logo" className="login-logo" />
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
const Login = Form.create({ name: 'loginForm' })(LoginForm);
export default Login