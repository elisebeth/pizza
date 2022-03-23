import Vue from 'vue'
import Vuex from 'vuex'

import dialog from './dialog/dialog.js'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: [dialog],
  })

export default store
