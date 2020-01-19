import React from 'react'
import Menu from './menu'
import Header from './header'
import Breadcrumb from './breadcrumb'
import { Layout } from 'antd';
import './frame.scss'

const { Content, Footer, Sider } = Layout;

class Container extends React.Component {
  state = {
    collapsed: true,
    showMenuIcon: 'icon-indent-increase',
    clientWidth: document.documentElement.clientWidth - 80,
    clientHeight: document.documentElement.clientHeight - 40
  }
  onCollapse = collapsed => {
    this.setState({ collapsed })
  }
  isCollapseEvent = () => {
    let collapsed = !this.state.collapsed
    this.setState({ collapsed, showMenuIcon: collapsed ? 'icon-indent-increase' : 'icon-indent-decrease' })
  }
  componentWillMount = () => {
    window.addEventListener('resize', () => {
      this.setState({
        clientWidth: document.documentElement.clientWidth - 80,
        clientHeight: document.documentElement.clientHeight - 40
      })
    })
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize')
  }
  render () {
    return (
      <Layout>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} trigger={null} style={{ position: 'fixed', top: '40px', height: '100%' }}>
          <span onClick={this.isCollapseEvent} className="menu-show-btn">
            <i className={this.state.showMenuIcon}></i>
          </span>
          <Menu />
        </Sider>
        <Layout>
          <Header />
          <Content style={{ margin: '40px 0 0 80px', padding: 10, height: this.state.clientHeight }}>
            <Breadcrumb />
            <div className="main-content" style={{ padding: 15 }}>{this.props.children}</div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}
export default Container