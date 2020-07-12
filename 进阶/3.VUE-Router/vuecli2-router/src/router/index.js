import Vue from 'vue'
import Router from 'vue-router'

/* 普通模式 */
/* import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User' */

/* 懒加载模式 */
const Home = () => import('../components/Home')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

//1.安装router插件
Vue.use(Router)

//2.创建VueRouter对象，并导出
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    /* 路由嵌套 */
    children: [{
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
]

const router = new Router({
  //配置路由和组件之间的映射关系
  routes: routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  /* ${//to and from are Route Object,next() must be called to resolve the hook} */
  document.title = to.matched[0].meta.title
  next()
})

export default router
