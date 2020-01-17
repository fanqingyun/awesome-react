import {withRouter} from "react-router-dom";
import Login from '../modules/login/Login'
import Home from '../modules/home/home'
export default [
  {
    path: '/login',
    Component: withRouter(Login)
  },
  {
    path: '/home',
    Component: Home,
    children: [

    ]
  }
]