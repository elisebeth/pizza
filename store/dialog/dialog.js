const productSpecs = {
  state: {
    pizza: [
      {
        name: 'Маленькая',
        size: 25,
      },
      {
        name: 'Средняя',
        size: 30,
      },
      {
        name: 'Большая',
        size: 35,
      },
    ],
  },
  mutations: {
    SET_CURRENT_SIZE(state, currentSize) {
      state.currentSize = currentSize
    },
    SET_CURRENT_DOUGH(state, currentDough) {
      state.currentDough = currentDough
    },
  },
  actions: {},
  getters: {
    currentDough: (state) => state.pizzaSizes.length,
    currentSize: (state) => state.currentSize,
  },
}

export default productSpecs
