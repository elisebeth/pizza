<template>
  <div class="bonus-card">
    <img src="../../assets/images/bonus.svg" alt="bonus" class="bonus-card__image">
    <h2 class="bonus-card__title">Бонусы появятся здесь после заказа</h2>
  </div>
</template>


<style lang="stylus" scoped>
.bonus-card
  padding 2rem
  border-radius 8px
  background #ffffff
  box-shadow 0px 4px 28px rgba(0, 0, 0, 0.08)
  display flex
  flex-direction column
  align-items center
  cursor pointer
  width 16rem

  &__image
    width 7.5rem
    margin-bottom 2rem

  &__title
    color #686466
    font-weight 700
    font-size 0.875rem
    margin-bottom 6rem

</style>
