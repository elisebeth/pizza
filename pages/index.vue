<template>
  <div class="app">
    <CommonCarousel
      :items="items"
      :options="{
        itemWidth: '540',
        itemHeight: '312',
        visibleRowSize: 2,
      }"
    />
    <div class="container">
      <h1 class="news__title title">Новинки</h1>
      <CommonCarousel
        :items="smallCards"
        :options="{
          itemWidth: '255',
          itemHeight: '99',
          visibleRowSize: 4,
        }"
      />
      <h1 class="products__title title">Пицца</h1>
      <CommonList />
      <h1 class="promotions__title title">Наши Акции</h1>
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
      items: [
        'main_promotion',
        'main_promotion',
        'main_promotion',
        'main_promotion',
        'main_promotion',
        'main_promotion',
        'main_promotion',
      ],

      smallCards: [
        'small-card',
        'small-card',
        'small-card',
        'small-card',
        'small-card',
        'small-card',
        'small-card',
        'small-card',
        'small-card',
        'small-card',
      ],
    }
  },

  computed: mapGetters(['pin']),

  mounted() {
    console.log(this.pin)
  },
}
</script>

<style lang="stylus" scoped>

@media screen and (max-width: 756px)
  .title
    padding-left 2rem

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

.products__title
  color #F7D22D
  font-weight bold
  font-size 2rem
  margin-bottom 1.5rem
</style>
