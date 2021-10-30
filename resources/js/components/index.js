import Vue from 'vue'
import AppFooter from './AppFooter'

[
    AppFooter,
].forEach(Component => {
  Vue.component(Component.name, Component)
})
