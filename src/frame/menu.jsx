import { Menu, Icon } from 'antd';
import React from 'react'
// 引入路由
import { Link } from 'react-router-dom';
import httpUtils from '../utils/httpUtils'
import { withRouter } from "react-router-dom";

const { SubMenu } = Menu;

class CustomeMenu extends React.Component {
  state = {
    collapsed: false,
    menuList: []
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  getMenuList = () => {
    httpUtils.post('/api/systemMgr/getMenuData', {}, (result) => {
      if (result.data.success) {
        this.setState({
          menuList: result.data.list
        })
      }
    })
  }
  // onSelect = () => {
  //   console.log('被选择')
  // }
  onClick = () => {
    // this.setState({
    //   current: e.key,
    // });
    // this.props.getPathname(this.props.location.pathname)
  }
  componentDidMount = () => {
    this.getMenuList()
  }
  render () {
    const pathname = this.props.location.pathname
    return (
      <div>
        <Menu
          mode="inline"
          theme="dark"
          onClick={this.onClick}
          defaultSelectedKeys={[pathname]}
        >
          {
            this.state.menuList.map(item => {
              return item.children && item.children.length ? (
                <SubMenu
                  key={item.href}
                  title={
                    <span>
                      <Icon component={() => (<i className={item.icon} />)} />
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {
                    item.children.map((subItem) => {
                      return subItem.children && subItem.children.length ? (
                        <SubMenu key={subItem.href} title={subItem.name}>
                          {
                            subItem.children.map((subSubItem) => (<Menu.Item key={subSubItem.href}><Link to={subSubItem.href}>{subSubItem.name}</Link></Menu.Item>))
                          }
                        </SubMenu>
                      ) : (<Menu.Item key={subItem.href}><Link to={subItem.href}>{subItem.name}</Link></Menu.Item>)
                    })
                  }
                </SubMenu>
              ) : (
                  <Menu.Item key={item.href}>
                    <Link to={item.href}>
                      <Icon component={() => (<i className={item.icon} />)} />
                      <span>{item.name}</span>
                    </Link>
                  </Menu.Item>
                )
            })
          }
        </Menu>
      </div>
    );
  }
}
export default withRouter(CustomeMenu)