<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <img src="../assets/icons/logo.svg" alt="" class="header__logo" />
        <div class="header-stages">
          <div class="header-stages__wrapper">
            <span class="header-stages__item">1</span
            ><span class="header-stages__line"></span>
            <span class="header-stages__item">2</span>
            <span class="header-stages__line"></span
            ><span class="header-stages__item">3</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DeliveryHeader',
}
</script>

<style lang="stylus" scoped>
.header
  padding 1rem 0
  border-bottom #ECECF1 .0625rem solid

  &__wrapper
    display flex
    justify-content space-between

  &-stages
    display flex
    flex-direction column
    align-items center

    &__wrapper
      display flex
      justify-content space-between
      align-items center
      width 25rem

    &__item
      display flex
      flex-direction column
      align-items center
      font-size .9375rem
      font-weight bold
      color #F7D22D
      border #F7D22D .125rem solid
      border-radius 50%
      padding .5rem .875rem
      position relative
      opacity .6

      &:nth-child(n)::after
        content 'Корзина'
        position absolute
        display block
        bottom -1.5rem
        color #0E0C0D
        white-space nowrap

      &:nth-child(3)::after
        content 'Оформление заказа'

      &:nth-child(5)::after
        content 'Заказ принят'


    &__line
      width 6.375rem
      border #B8C5D0 .125rem dashed
</style>
