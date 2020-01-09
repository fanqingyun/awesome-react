import React, { Component } from 'react';
import test1 from './Button.css'; // Tell Webpack that Button.js uses these styles
import cssStyles from './styles.css'
class Button extends Component {
  render () {
    console.log(cssStyles)
    console.log(test1)
    // You can use them as regular CSS styles
    return (
      <div>
        <div className={cssStyles.color}>{cssStyles.color}</div>
        <div className="Button color">测试</div>
      </div>
    );
  }
}
export default Button