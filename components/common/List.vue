<template>
  <div class="list">
    <CommonCard
      v-for="(product, index) of products"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CommonList',

  computed: mapGetters(['products']),

  created() {
    this.testAllProducts()
  },

  methods: {
    ...mapActions(['testAllProducts']),
  },
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
