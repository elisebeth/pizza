const cart = {
  state: {
    cartItems: [],
    cartToppings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    cartSauces: [],
  },
  mutations: {
    SET_CART_ITEMS(state, cartItems) {
      state.cartItems = cartItems
    },
    SET_CART_TOPPINGS(state, cartToppings) {
      state.cartToppings = cartToppings
    },
    SET_CART_SAUCES(state, cartSauces) {
      state.cartSauces = cartSauces
    },
  },
  actions: {
    async addItem({ commit, state }, item) {
      const items = state.cartItems
      await this.$axios.$post('/cart', { id: item.id, value: 1 })
      items.push(item)
      commit('SET_CART_ITEMS', items)
    },
    async deleteItem({ commit, state }, item) {
      await this.$axios.$delete(`/cart/${item.id}`)
      const items = state.cartItems.filter((elem) => elem.id !== item.id)
      commit('SET_CART_ITEMS', items)
    },
    changeItemValue() {},
    addTopping({ commit, state }, topping) {
      const toppings = state.cartToppings
      // await this.$axios.$post('/cart', { id: topping.id, value: 1 })
      toppings.push(topping)
      commit('SET_CART_TOPPINGS', toppings)
    },
    async deleteTopping({ commit, state }, topping) {
      await this.$axios.$delete(`/cart/${topping.id}`)
      const toppings = state.cartToppings.filter(
        (elem) => elem.id !== topping.id
      )
      commit('SET_CART_TOPPINGS', toppings)
    },
    async addSauce({ commit, state }, sauce) {
      const sauces = state.cartSauces
      await this.$axios.$post('/cart', { id: sauce.id, value: 1 })
      sauces.push(sauce)
      commit('SET_CART_SAUCES', sauces)
    },
    async deleteSauce({ commit, state }, sauce) {
      await this.$axios.$delete(`/cart/${sauce.id}`)
      const sauces = state.cartSauces.filter((elem) => elem.id !== sauce.id)
      commit('SET_CART_SAUCES', sauces)
    },
  },
  getters: {
    cartToppings: (state) => state.cartToppings,
  },
}

export default cart
