import { v4 as uuidv4 } from 'uuid'

const cart = {
  state: {
    cartItems: [
      {
        image: 1,
        title: 'С креветками и трюфелями',
        description:
          'Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
        price: 540,
        value: 1,
        id: uuidv4(),
      },
      {
        image: 1,
        title: 'С креветками и трюфелями',
        description:
          'Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
        price: 540,
        value: 1,
        id: uuidv4(),
      },
      {
        image: 1,
        title: 'С креветками и трюфелями',
        description:
          'Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
        price: 540,
        value: 1,
        id: uuidv4(),
      },
    ],
    cartToppings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    cartSouces: [
      {
        image: 1,
        title: 'Сырный соус',
        price: 120,
      },
      {
        image: 2,
        title: 'Барбекю',
        price: 120,
      },
      {
        image: 3,
        title: 'Ранч',
        price: 120,
      },
      {
        image: 4,
        title: 'Малиновое варенье',
        price: 120,
      },
      {
        image: 5,
        title: 'Сгущенка',
        price: 120,
      },
      {
        image: 1,
        title: 'Сырный соус',
        price: 120,
      },
    ],
    currentSouces: [],
  },
  mutations: {
    SET_CART_ITEMS(state, cartItems) {
      state.cartItems = cartItems
    },

    DELETE_CART_ITEM(state, index) {
      state.cartItems.splice(index, 1)
    },

    SET_CART_TOPPINGS(state, cartToppings) {
      state.cartToppings = cartToppings
    },
    SET_CART_SOUCES(state, currentSouce) {
      state.currentSouces = currentSouce
    },
  },
  actions: {
    addItem({ commit, state }, item) {
      const items = state.cartItems
      // await this.$axios.$post('/cart', { id: item.id, value: 1 })
      items.push(item)
      commit('SET_CART_ITEMS', items)
    },
    deleteItem({ commit, state }, item) {
      // await this.$axios.$delete(`/cart/${item.id}`)
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
    addSouces({ commit, state }, souce) {
      const souces = state.currentSouces
      // await this.$axios.$post('/cart', { id: souce.id, value: 1 })
      souces.push(souce)
      commit('SET_CART_SOUCES', souces)
    },
    deleteSouce({ commit, state }, souce) {
      // await this.$axios.$delete(`/cart/${souce.id}`)
      const souces = state.currentSouces.filter((elem) => elem !== souce)
      commit('SET_CART_SOUCES', souces)
    },
  },
  getters: {
    cartItems: (state) => state.cartItems,
    cartToppings: (state) => state.cartToppings,
    cartSouces: (state) => state.cartSouces,
    currentSouces: (state) => state.currentSouces,
  },
}

export default cart
