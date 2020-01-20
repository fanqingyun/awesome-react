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
    // const icon = this.state.entity.icon ? <Icon type={this.state.entity.icon} /> : null
    return (
      <Breadcrumb>
        <Icon type={this.state.entity.icon} />
        {this.state.entity.breadCrumbData.map((item, key) => (<Breadcrumb.Item key={key}>{item}</Breadcrumb.Item>))}
      </Breadcrumb>
    )
  }
}
export default withRouter(CustomeBreadcrumb)