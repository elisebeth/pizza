const store = {
  state: {
    // promotions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
  getters: {
    promotions: (state) => state.promotions,
  },
}

export default store
