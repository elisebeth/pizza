<template>
  <div class="list">
    <CommonCard v-for="i in 55" :key="i" />
  </div>
</template>

<script>
export default {
  name: 'CommonList',
}
</script>

<style lang="stylus" scoped>
.list
  display grid
  grid-template-columns 1fr 1fr 1fr 1fr
  grid-row-gap 3rem
  grid-column-gap 2rem
</style>
