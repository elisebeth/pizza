const component = {
  state: {
    currentComponent: {
      icon: 'dashboard',
      title: 'Dashboard',
      path: 'dashboard',
    },
  },

  mutations: {
    SET_CURRENT_COMPONENT(state, component) {
      state.currentComponent = component
    },
  },

  actions: {},

  getters: {
    currentComponent: (state) => state.currentComponent,
  },
}

export default component
