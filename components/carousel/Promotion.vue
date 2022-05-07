<template>
  <div ref="promotion" class="promotion">
    <img src="../../assets/images/main_promotion.png" alt="promotion" class="promotion__image">
  </div>
</template>

<script>
export default {
  name: 'Promotion',

  mounted() {
  }
};
</script>

<style lang="stylus" scoped>
.promotion
  display flex

  &__image
    width 33.75rem
    height 19.5rem
    cursor pointer
</style>
