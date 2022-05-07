<template>
  <div class="suggest">
    <img :src="require(`../../assets/images/${item.image}.png`)" alt="item-image" class="suggest__image">
    <div class="suggest__content">
      <h2 class="suggest__title">{{ item.title }}</h2>
      <span class="suggest__price">от {{ item.price }} ₽</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Suggest',
  props: ['item']
};
</script>

<style lang="stylus" scoped>
.suggest
  padding 0.75rem
  border-radius 12px
  border 2px solid #E2E2E9
  background #ffffff
  display flex
  align-items center
  width 15.9375rem
  transition border .2s linear

  &:hover
    border-color rgba(247, 210, 45, 0.4)

  &__image
    margin-right 1rem
    width 4.5rem
    height 4.5rem

  &__content
    display flex
    flex-direction column

  &__title
    font-weigh 600
    color #000
    font-size 0.8125rem
    margin-bottom 0.5rem
    line-height 0.875rem

  &__price
    font-weight 700
    color #FF2E65
    font-size 0.875rem

</style>
