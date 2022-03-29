<template>
  <section class="promotions">
    <img
      v-for="i in 5"
      :key="i"
      class="promotions__item"
      src="../../assets/images/promotion.png"
      alt=""
    />
  </section>
</template>

<script>
export default {
  name: 'CommonPromotions',
}
</script>

<style lang="stylus" scoped>
.promotions
  margin-top 3rem
  display grid
  grid-template-columns repeat(4, 1fr)
  grid-template-rows repeat(2, 1fr)
  grid-row-gap 1.15rem
  grid-column-gap 1.75rem
  margin-bottom 4rem

  &__item
    width 16rem
    height 12rem
    cursor pointer

    &:first-child
      width 33.8125rem
      height 25.3125rem
      grid-column-start 1
      grid-column-end 3
      grid-row-start 1
      grid-row-end 3
</style>
