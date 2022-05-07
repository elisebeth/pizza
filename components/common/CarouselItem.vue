<template>
  <div class="carousel-item">
    <slot name="carousel-item"></slot>
  </div>
</template>

<script>
export default {
  name: 'CommonCarouselItem',
  props: ['item', 'options'],

  methods: {
    convertToRem(value) {
      const size = parseInt(value);

      return size / 16 + 'rem';
    },
  },
};
</script>

<style lang="stylus" scoped>
.carousel-item
  transition opacity .2s linear, transform .2s linear
  cursor pointer
  margin-right 2rem
</style>
