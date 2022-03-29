<template>
  <div class="app">
    <CommonCarousel :promotions="promotions" />
    <div class="container">
      <h1 class="news__title">Новинки</h1>
      <CommonNewsList />
      <h1 class="product__title">Пицца</h1>
      <CommonList />
      <h1 class="promotions__title">Наши Акции</h1>
      <CommonPromotions />
    </div>
    <CommonMap />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'Default',

  data() {
    return {
      promotions: [],
    }
  },

  computed: mapGetters(['pin']),

  mounted() {
    console.log(this.pin)
  },
}
</script>

<style lang="stylus" scoped>


.promotions__title
  color #F7D22D
  font-size 3rem
  text-align center
  margin-top 4rem

.news__title
  color #231F20
  font-weight bold
  font-size 1.5rem
  margin-bottom 2rem

.product__title
  color #F7D22D
  font-weight bold
  font-size 2rem
  margin-bottom 1.5rem
</style>
