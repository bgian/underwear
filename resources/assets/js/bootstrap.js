import Lodash from 'lodash'
import Vue from 'vue'
import Axios from 'axios'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

window.Vue = Vue
window.VueRouter = VueRouter
window.Vuex = Vuex
window._ = Lodash;

window.axios = Axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.use(Vuex)
Vue.use(VueRouter)