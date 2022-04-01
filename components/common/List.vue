<template>
  <div class="list">
    <CommonCard v-for="i in 26" :key="i" />
  </div>
</template>

<script>
export default {
  name: 'CommonList',
}
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 768px) and (min-width: 512px)
  .list
    grid-template-columns repeat(3, 1fr) !important

@media screen and (max-width: 512px)
  .list
    grid-template-columns repeat(2, 1fr) !important

.list
  display grid
  grid-template-columns repeat(4, 1fr)
  grid-row-gap 3rem
  grid-column-gap 2rem
  justify-items center
</style>
