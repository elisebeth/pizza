<template>
  <img
    :src="require(`../../assets/images/${item}.png`)"
    class="carousel-item"
    :style="{
      width: convertToRem(options.itemWidth),
      height: convertToRem(options.itemHeight),
    }"
  />
</template>

<script>
export default {
  name: 'CommonCarouselItem',
  props: ['item', 'options'],

  methods: {
    convertToRem(value) {
      const size = parseInt(value)

      return size / 16 + 'rem'
    },
  },
}
</script>

<style lang="stylus" scoped>
.carousel-item
  transition opacity .2s linear, transform .2s linear
  margin-right 2rem
  cursor pointer
</style>
