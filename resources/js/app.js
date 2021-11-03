// require('./bootstrap');

import './plugins/axios';

import Vue from 'vue'
import vuetify from './plugins/vuetify'
import Main from './Main'

import './components';

new Vue({
    vuetify,
    ...Main
});

