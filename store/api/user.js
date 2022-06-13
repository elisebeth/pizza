const user = {
  state: {
    user: {},
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
  },

  actions: {
    async getUser({ commit }, id) {
      const user = (await this.$axios.$get('user/' + id)).data

      commit('SET_USER', user)
    },

    async updateUser({ state, commit }, user) {
      const currentUser = { ...state.user, ...user }

      const updatedUser = (await this.$axios.$patch('user/' + currentUser.id))
        .data

      commit('SET_USER', updatedUser)
    },
  },

  getters: {
    user: (state) => state.user,
  },
}

export default user
