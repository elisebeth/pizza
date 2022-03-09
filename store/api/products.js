const store = {
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
  },
  actions: {
    async getProductsByCategory({ commit }, category) {
      const products = (await this.$axios.$get(category)).data
      commit('SET_PRODUCTS', products)
    },

    async createProductByCategory({ commit }, object) {
      const response = await this.$axios.$post(object.category, object.product)
      console.log(response)
    },
  },
  getters: {
    products: (state) => state.products,
  },
}

export default store
