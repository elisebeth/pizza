<template>
  <div class="news">
    <CommonSmallCard v-for="i in 4" :key="i" />
  </div>
</template>

<script>
export default {
  name: 'CommonNewsList',
}
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 756px)
  .news
    padding 0 2rem

.news
  display grid
  grid-template-columns repeat(4, 1fr)
  grid-column-gap 2rem
  margin-bottom 3rem
</style>
