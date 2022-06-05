import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Vue.prototype.APP = app;
export default new VueRouter({
    routes: [{
        path: '/',
        component: resolve => require(['@/components/HelloWorld'], resolve),
        children: [
            {path: '/', redirect: '/Ch0'},
            {path: '/Ch0', component: resolve => require(['@/components/Ch0'], resolve)},
            {path: '/Ch1', component: resolve => require(['@/components/Ch0'], resolve)},
            {path: '/Ch2', component: resolve => require(['@/components/Ch0'], resolve)},
        ]
    }
    ]
})

