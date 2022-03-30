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
@media screen and (max-width: 756px)
  .promotions
    grid-template-columns repeat(2, 1fr) !important
    grid-template-rows repeat(4, 1fr) !important
    padding 3rem 2rem 4rem 2rem !important


    &__item:first-child
      grid-column-start 1 !important
      grid-column-end 3 !important
      grid-row-start 1 !important
      grid-row-end 3 !important

.promotions
  padding 3rem 0 4rem 0
  display grid
  grid-template-columns repeat(4, 1fr)
  grid-template-rows repeat(2, 1fr)
  grid-row-gap 1.5rem
  grid-column-gap 1.5rem

  &__item
    width 100%
    height 100%
    cursor pointer

    &:first-child
      width 100%
      height 100%
      grid-column-start 1
      grid-column-end 3
      grid-row-start 1
      grid-row-end 3
</style>
