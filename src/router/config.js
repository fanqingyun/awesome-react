import Login from '../modules/login/Login'
import Home from '../modules/home/home'
export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [

    ]
  }
]