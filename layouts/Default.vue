<template>
  <div class="default">
    <LayoutHeader />
    <nuxt />
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>

<style lang="stylus" scoped>
.default
  width 100%
  overflow hidden
</style>
