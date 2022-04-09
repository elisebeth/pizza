import Cookies from 'js-cookie'

const auth = {
  state: {
    errors: [],
  },
  mutations: {},
  actions: {
    async register({ commit, state }, user) {
      const token = await this.$axios.$post('auth/signup', user)

      Cookies.set('access_token', token.access_token, { expires: 7 })
      this.$router.push('/')
    },
  },
  getters: {},
}

export default auth
