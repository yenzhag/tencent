import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/Home',
        name: 'Home',
        component: Home,
        //配置二级路由
        children: [{
                path: 'choice',
                name: 'choice',
                component: () =>
                    import ('../views/second/choice.vue')
            },
            {
                path: 'find',
                name: 'find',
                component: () =>
                    import ('../views/second/find.vue')
            },
            {
                path: 'life',
                name: 'life',
                component: () =>
                    import ('../views/second/life.vue')
            },
            {
                path: 'movie',
                name: 'movie',
                component: () =>
                    import ('../views/second/movie.vue')
            },
            //重定向
            {
                path: "/",
                redirect: "/Home/choice"
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/vip',
        name: 'vip',
        component: () =>
            import ('../views/vip.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () =>
            import ('../views/news.vue')
    },
    {
        path: '/self',
        name: 'self',
        component: () =>
            import ('../views/self.vue')
    },
    {
        path: "/",
        redirect: "/Home"
    }

]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router