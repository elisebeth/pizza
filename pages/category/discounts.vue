<template>
  <section class="discounts">
    <div class="container">
      <ul class="discounts__list">
        <CommonDiscountCard v-for="index in 12" :key="index" />
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Discounts',
  layout: 'Default',
}
</script>

<style lang="stylus" scoped>
.discounts
  margin-top 4rem

  &__list
    display grid
    list-style-type none
    grid-template-columns repeat(3, 1fr)
    grid-column-gap 1.875rem
    grid-row-gap 1.875rem
</style>
