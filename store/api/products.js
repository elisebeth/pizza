const store = {
  state: {
    products: [
      {
        id: 1,
        title: 'product',
        description: 'some text description',
        price: 5000,
      },
      {
        id: 1,
        title: 'product',
        description: 'some text description',
        price: 5000,
      },
      {
        id: 1,
        title: 'product',
        description: 'some text description',
        price: 5000,
      },
      {
        id: 1,
        title: 'product',
        description: 'some text description',
        price: 5000,
      },
      {
        id: 1,
        title: 'product',
        description: 'some text description',
        price: 5000,
      },
      {
        id: 1,
        title: 'product',
        description: 'some text description',
        price: 5000,
      },
      {
        id: 1,
        title: 'product',
        description: 'some text description',
        price: 5000,
      },
      {
        id: 1,
        title: 'product',
        description: 'some text description',
        price: 5000,
      },
    ],
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },

    DELETE_PRODUCT(state, id) {
      state.products = state.products.filter((product) => product.id !== id)
    },
  },

  actions: {
    async testAllProducts({ commit }) {
      const products = (await this.$axios.get('product')).data

      console.log(products)

      commit('SET_PRODUCTS', products)
    },

    async getAllProducts({ commit }) {
      commit('SET_PRODUCTS', [])

      const products = (await this.$axios.get('product')).data
      console.log("it's still work!", products)
      commit('SET_PRODUCTS', products)
    },

    async createProduct({ dispatch }, product) {
      await this.$axios.$post('product', product)

      await dispatch('getAllProducts')
    },

    async deleteProductById({ commit, state, dispatch }, id) {
      await this.$axios.$delete('product/' + id)

      await dispatch('getAllProducts')

      // commit('', id)
    },

    async updateProductById({ commit, state }, product) {
      const updatedProduct = (
        await this.$axios.$patch('product/' + product.id, product)
      ).data

      const products = state.products.map((elem) => {
        if (elem.id === updatedProduct.id) return updatedProduct
        return elem
      })

      commit('SET_PRODUCTS', products)
    },
  },
  getters: {
    products(state) {
      return state.products
    },
  },
}

export default store
