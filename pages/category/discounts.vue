<template>
  <section class="discounts">
    <div class="container">
      <ul class="discounts__list">
        <CommonDiscountCard v-for="index in 12" :key="index"/>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Discounts',
  layout: 'Default',
};
</script>

<style lang="stylus" scoped>

@media screen and (max-width: 1280px)
  .discounts__list
    padding 2rem
    grid-template-columns repeat(2, 1fr) !important

@media screen and (max-width: 540px)
  .discounts__list
    grid-template-columns 1fr !important


.discounts
  margin-top 4rem

  &__list
    display grid
    list-style-type none
    grid-template-columns repeat(3, 1fr)
    justify-items center
    grid-column-gap 1.875rem
    grid-row-gap 1.875rem
</style>
