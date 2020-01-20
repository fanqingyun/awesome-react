import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import httpUtils from '../utils/httpUtils'
import { withRouter } from "react-router-dom";
class CustomeBreadcrumb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entity: {
        icon: '',
        breadCrumbData: []
      }
    }
  }
  getBreadcrumb = (pathname) => {
    httpUtils.post('/api/systemMgr/getBreadcrumb', pathname, (result) => {
      if (result.data.success) {
        this.setState({
          entity: result.data.entity
        })
      }
    })
  }
  componentDidMount () {
    this.getBreadcrumb(this.props.location.pathname)
  }
  render () {
    return (
      <div>
        <Icon component={() => (<i className={this.state.entity.icon} />)} />
        <Breadcrumb style={{display: 'inline-block', marginLeft: 5}}>
          {this.state.entity.breadCrumbData.map((item, key) => (<Breadcrumb.Item key={key}>{item}</Breadcrumb.Item>))}
        </Breadcrumb>
      </div>
    )
  }
}
export default withRouter(CustomeBreadcrumb)