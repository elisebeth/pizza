import Vue from 'vue'
import Vuex from 'vuex'

import { products, promotions } from './api'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: [products, promotions],
  })

export default store
