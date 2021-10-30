import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to.path);

    if (to.name !== 'login' && !store.getters['auth/check']) {
        next({ name: 'login' });
    } else {
        next();
    }
})

export default router;
