<template>
  <div class="login">
    <div class="container">
      <form class="login-form" @submit.prevent="login({ email, password })">
        <legend class="login__title">Авторизация</legend>
        <label for="email" class="login-form__title">Введите вашу почту</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="login-form__input"
          placeholder="example@example.com"
          :class="{ active: email.length }"
        />
        <label for="password" class="login-form__title">Введите пароль</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="login-form__input"
          placeholder="super-secret-password"
          :class="{ active: password.length }"
        />

        <button class="login__submit">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  layout: 'Default',

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    ...mapActions(['login']),
  },
}
</script>

<style lang="stylus">
.active
  border-color #F7D22D !important

.login
  padding 4rem 0

  &__title
    font-weight bold
    color #F7D22D
    font-size 2rem
    margin-bottom 2.5rem
    text-align center

  &-form
    padding 2rem 3rem
    max-width 37.5rem
    border-radius 8px
    box-shadow 0 0 48px 0 alpha(#797979, .5)
    // border 2px solid #F7D22D
    display flex
    flex-direction column
    margin 0 auto

    &__title
      margin-bottom 1rem
      color #797979
      font-weight 500
      font-size 1.5rem

    &__input
      padding .75rem 1rem
      margin-bottom 2rem
      border-radius 4px
      font-size 1.25rem
      outline none
      border 2px solid alpha(#797979, .25)
      color #797979
      transition border .4s

      &:focus, &:active
        border-color #F7D22D

  &__submit
    margin-top 2rem
    padding 1rem 2rem
    font-size 1.25rem
    align-self center
    font-weight 600
    border none
    outline none
    border-radius 4px
    cursor pointer
    background #F7D22D
    color #fff
    border 1px solid #F7D22D
    transition color .2s, background .2s

    &:hover
      background none
      color #F7D22D
</style>
