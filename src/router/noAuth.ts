import LoginPage from '../pages/noAuth/login.vue'
import forgetPassword from '../pages/noAuth/forgetPassword.vue'
import registerPage from '../pages/noAuth/register.vue'
export default [
  {
    path: '/login',
    name: '登录',
    component: LoginPage
  },
  {
    path: '/forgetPassword',
    name: '忘记密码',
    component: forgetPassword
  },
  {
    path: '/register',
    name: '注册',
    component: registerPage
  }
]
