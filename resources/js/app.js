// require('./bootstrap');

import './plugins/axios';

import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Main from './Main'

import './components';

new Vue({
    vuetify,
    store,
    router,
    ...Main
});

