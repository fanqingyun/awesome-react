import Login from '../modules/login/Login'
import Home from '../modules/home/home'
import UserManage from '../modules/setting/userManage'
export default [
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/home',
    Component: Home
  },
  {
    path: '/userManage',
    Component: UserManage
  }
]