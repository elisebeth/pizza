<template>
  <div class="small-card">
    <img
      src="../../assets/images/pizza.png"
      alt="pizza"
      class="small-card__icon"
    />
    <div class="small-card__content">
      <h2 class="small-card__title">Карбонара</h2>
      <span class="small-card__price">от 120</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonSmallCard',
  props: ['product'],
}
</script>

<style lang="stylus" scoped>
.small-card
  background #fff
  box-shadow 0rem .25rem 1.5rem rgba(0, 0, 0, 0.06)
  border-radius .75rem
  padding .875rem 1rem
  display flex
  align-items center
  justify-content center
  width 16rem
  cursor pointer

  &__icon
    width 4.4375rem
    height 4.4375rem
    margin-right 1.5rem

  &__content
    display flex
    flex-direction column

  &__title
    color #000
    font-size 1.125rem
    font-weight bold
    margin-bottom .25rem

  &__price
    color #F7D22D
    font-weight 800
    font-size 1rem
</style>
