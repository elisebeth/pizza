<template>
  <section class="management">
    <ManagementNavigation />
    <section class="management__wrapper">
      <h2 class="management__title">{{ currentComponent.title }}</h2>
      <ManagementStats />
      <component :is="'Management' + currentComponent.title" />
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ManagementPage',
  layout: 'Empty',
  middleware: ['auth'],

  computed: mapGetters(['currentComponent']),
}
</script>

<style lang="stylus">
.management
  display grid
  padding 2rem
  grid-template-columns 1.5fr 5fr
  grid-column-gap 1.5rem
  height 100vh
  overflow hidden

  &__title
    margin-bottom 4rem
    font-size 2.5rem

  &__wrapper
    display flex
    flex-direction column
</style>
