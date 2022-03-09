const store = {
  state: {
    promotions: [],
  },
  mutations: {
    SET_PROMOTIONS(state, promotions) {
      state.promotions = promotions
    },
  },
  actions: {
    async getPromotions({ commit }) {
      const promotions = (await this.$axios.$get('promotions')).data
      commit('SET_PROMOTIONS', promotions)
    },
  },
  getters: {},
}

export default store
