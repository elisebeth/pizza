<template>
  <div class="app">
    <CommonCarousel
      :items="items"
      :options="{
        component: 'CarouselPromotion',
        visibleRowSize: 2
      }"
    />
    <div class="container">
      <section class="news">
        <h1 class="news__title title">Новинки</h1>
        <ul class="news-list">
          <li v-for="(item, index) of news" :key="index * 997" class="news-list__item">
            <img :src="require(`../assets/images/${item.image}.png`)" alt="pizza" class="item__image">
            <div class="item-content">
              <h4 class="item-content__title">{{ item.title }}</h4>
              <span class="item-content__price">от {{ item.price }} ₽</span>
            </div>
          </li>
        </ul>
      </section>
      <h1 class="products__title title">Пицца</h1>
      <CommonList/>
      <h1 class="promotions__title title">Наши Акции</h1>
      <CommonPromotions/>
    </div>
    <CommonMap/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

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

      news: [
        {
          image: 'pizza',
          title: 'Карбонара',
          price: 120
        },
        {
          image: 'pizza',
          title: 'Карбонара',
          price: 120
        },
        {
          image: 'pizza',
          title: 'Карбонара',
          price: 120
        },
        {
          image: 'pizza',
          title: 'Карбонара',
          price: 120
        },
      ]
    };
  },

  computed: mapGetters(['pin']),

  mounted() {
    console.log(this.pin);
  },
};
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

.news
  margin-bottom 2.75rem

  &__title
    color #231F20
    font-weight bold
    font-size 1.5rem
    margin-bottom 2rem

  &-list
    display flex
    align-items center
    list-style-type none
    justify-content space-between

    &__item
      display flex
      align-items center
      cursor pointer
      border-radius 12px
      box-shadow 0px 4px 24px rgba(0, 0, 0, 0.06)
      background #ffffff
      padding 0.75rem
      width 16rem

      .item
        &__image
          width 4.5rem
          height 4.5rem
          margin-right 1.5rem

        &-content
          display flex
          flex-direction column

          &__title
            color #000
            font-weight 700
            font-size 1.125rem
            margin-bottom 0.25rem

          &__price
            color #f7d22d
            font-weight 800
            font-size 1rem

.products__title
  color #F7D22D
  font-weight bold
  font-size 2rem
  margin-bottom 1.5rem
</style>
