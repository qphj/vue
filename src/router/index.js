//配置路由信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
const Home = () => import('../view/home/Home')
const Car = () => import('../view/car/Car')
const Profile = () => import('../view/profile/Profile')
import About from '../components/About'
import News from '../components/News'
import Message from '../components/Message'


//安装
Vue.use(VueRouter);

//引用
const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: 'news',
                component: News,
            },
            {
                path: 'message',
                component: Message,
            },
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
        path: '/car',
        component: Car,
        meta: {
            title: '购物车'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '个人'
        }
    }
]
const router = new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: 'active'
});
// router.beforeEach((to, from, next) => {
//     document.title = to.matched[0].meta.title;
//     next();
// })
export default router;