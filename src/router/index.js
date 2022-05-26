import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import LoginForm from '../components/login/LoginForm'
import RegisterForm from '../components/login/RegisterForm'

// 首页三个内容
import HomeIndex from '@/components/home/HomeIndex'
import HomeFind from '@/components/home/HomeFind'
import HomePerson from '@/components/home/HomePerson'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeView,
    children: [{
      name: 'index',
      path: 'index',
      component: HomeIndex,
      meta: {
        title: '首页面'
      }
    },
    {
      name: 'find',
      path: 'find',
      component: HomeFind,
      meta: {
        title: '发现'
      }
    },
    {
      name: 'person',
      path: 'person',
      component: HomePerson,
      meta: {
        title: '个人中心'
      }
    }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView'),
    meta: {
      title: '用户登录'
    },
    children: [{
      name: 'login-form',
      path: 'loginform',
      component: LoginForm
    },
    {
      name: 'register-form',
      path: 'registerform',
      component: RegisterForm
    }
    ]
  },
  {
    path: '/fight',
    name: 'fight',
    component: () => import('@/views/FightView'),
    meta: {
      title: '抗击疫情'
    }
  },
  {
    path: '/publishmood',
    name: 'publishmood',
    component: () => import('@/views/PublishMoodView'),
    meta: {
      title: '发布心情'
    }
  }
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  routes: routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
