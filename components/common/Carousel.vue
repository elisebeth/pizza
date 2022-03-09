<template>
  <div class="carousel">
    <CommonCarouselItem v-for="(promotion, index) of promotions" :key="index" :promotion="promotion" />
  </div>
</template>

<script>
export default {
  name: "CommonCarousel",
  props: ['promotions'],
}
</script>

<style lang="stylus" scoped>
.carousel
  width 100%
  display flex
  align-items center
</style>