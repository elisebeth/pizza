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

<style lang="stylus">
.default
  width 100%
  overflow hidden
</style>
