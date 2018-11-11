import Vue from "vue"
import VueRouter from "vue-router"
import Person from './components/Person.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:"/",
        component:()=>import('./page/login/index.vue')
    },{
        path:"/person",
        component:Person
    },{
        path:"/info",
        component:()=>import('./components/Info.vue')
    },{
        path:"/el",
        component:()=>import("./page/el/index.vue")
    },{
        path:"/mock",
        component:()=>import("./page/mock/index.vue")
        
    },{
        path:'/goods',
        component:()=>import('./page/commodity/index.vue')
    },{
        path:'/confirm/:totalPrice/:totalCount',
        component:()=>import('./page/commodity/confirm.vue')
    },{
        path:'/product',
        component:()=>import('./page/product/productList.vue')
    },{
        path:'/todolist',
        component:()=>import('./page/todolist/index.vue')
    }
]})