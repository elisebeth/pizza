<template>
  <section class="bonuses">
    <div class="container">
      <h2 class="bonuses__title">Мои бонусы</h2>
      <div class="bonuses__wrapper">
        <CommonBonusCard v-for="index in 3" :key="index"/>
      </div>
      <nuxt-link class="bonuses__link" to="category/promotions">Все наши акции</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Bonuses',
};
</script>

<style lang="stylus" scoped>
.bonuses
  background #E3ECF5
  padding 2.625rem 0

  &__title
    color #F7D22D
    font-weight 800
    font-size 2.125rem
    margin-bottom 2rem

  &__wrapper
    display flex
    align-items center
    justify-content space-between

  &__link
    color #F7D22D
    font-weight 700
    font-size 0.9375rem
    text-decoration none
    border-bottom 2px dotted #F7D22D
    display inline-block
    margin-top 2.625rem
</style>
