import Vue from 'vue'
import Vuex from 'vuex'

import { products, promotions, cart, auth, user } from './api'

import { component } from './management'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: [products, promotions, cart, auth, component, user],
  })

export default store
