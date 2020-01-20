import {withRouter} from "react-router-dom";
import React from 'react'
import './login.scss'
import { Form, Icon, Input, Button, Alert } from 'antd';
import Logo from './images/NBU-LOGO.png'
import { JSEncrypt } from 'jsencrypt'
import httpUtils from '../../utils/httpUtils'
import tipUtils from '../../utils/tipUtils'

const api = {
  getPublicKey: '/api/login/getPublicKey',
  auth: '/api/login/auth'
}
class LoginForm extends React.Component {
  state = {
    clientWidth: `${document.documentElement.clientWidth}px`,
    clientHeight: `${document.documentElement.clientHeight}px`,
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
    httpUtils.post(api.getPublicKey, {}, result => {
      if (result.data.success) {
        this.rsaInfo(result.data.entity)
      } else {
        tipUtils.error(result.data.message)
      }
    })
  }
  // 加密用密码
  rsaInfo(pubKey) {
    let _this = this
    let jsEncrypt = new JSEncrypt()
    jsEncrypt.setPublicKey(pubKey)
    let user = this.props.form.getFieldsValue()
    let userName = jsEncrypt.encrypt(user.userName)
    let password = jsEncrypt.encrypt(user.password)
    let params = {userName, password}
    httpUtils.post(api.auth, params, (result) => {
      if (result.data.success) {
        sessionStorage.setItem('token', result.data.entity.token)
        // this.props.history.push(result.data.entity.defaultPage)
        _this.props.history.push('/userManage')
      } else {
        // tipUtils.error(result.data.message)
      }
    })
  }
  // 登录
  handleSubmit (e) {
    let _this = this
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        _this.getPublickey()
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
          <Form onSubmit={this.handleSubmit.bind(this)}>
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
export default withRouter(Login)