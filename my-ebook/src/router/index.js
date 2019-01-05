import  Vue from 'vue'
import  VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/ebook'
        },
        {
            path: '/ebook',
            component: () => import('../view/ebook/index'),
            children: [
                {
                    path: ':fileName',
                    component: () => import('../components/Ebook/EbookReader')
                },
            ]
        }
    ]
})
