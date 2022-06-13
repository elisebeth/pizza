import Cookies from 'js-cookie'

const auth = {
  state: {
    errors: [],
    token: null,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
  },
  actions: {
    async register({ commit, state }, user) {
      const token = await this.$axios.$post('auth/signup', user)

      Cookies.set('access_token', token.access_token, { expires: 7 })

      commit('SET_TOKEN', token.access_token)
      this.$router.push('/')
    },

    async login({ commit, state }, user) {
      const token = await this.$axios.$post('auth/login', user)
      Cookies.set('access_token', token.access_token, { expires: 7 })

      commit('SET_TOKEN', token.access_token)
      this.$router.push('/profile')
    },

    logout({ commit }) {
      Cookies.remove('access_token', { path: '' })
      commit('SET_TOKEN', null)

      this.$router.push('/')
    },
  },
  getters: {
    token: (state) => state.token,
  },
}

export default auth
