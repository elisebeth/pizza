<template>
  <div class="profile">
    <Bonuses />
    <Account />
    <div class="container">
      <button class="profile__button" @click="logout">Выйти</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProfilePage',
  layout: 'Default',

  methods: {
    ...mapActions(['logout']),
  },
}
</script>

<style lang="stylus" scoped>
.profile
  width 100%

  &__button
    padding 1rem 2.5rem
    background #E3ECF5
    color #696F7A
    font-size 1rem
    font-weight 700
    border-radius 8px
    outline none
    border none
    cursor pointer
</style>
