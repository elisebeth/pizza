<template>
  <img src="../../assets/images/main_promotion.png" class="carousel-item" />
</template>

<script>
export default {
  name: 'CommonCarouselItem',
  props: ['promotion'],
}
</script>

<style lang="stylus" scoped>
.carousel-item
  width 33.75rem
  height 19.5rem
  transition opacity .2s linear, transform .2s linear
  margin-right 2rem
</style>
