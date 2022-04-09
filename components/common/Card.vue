<template>
  <div class="card">
    <img src="../../assets/images/big_pizza.png" alt="" class="card__image" />
    <section class="card-info">
      <h2 class="card-info__title">{{ product.title }}</h2>
      <p class="card-info__description">
        {{ product.description }}
      </p>
      <article class="card-info__cost">
        <p class="card-info__price">{{ product.price }}&#8381;</p>
        <button class="card-info__cart">В корзину</button>
      </article>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CommonCard',
  props: ['product'],

  methods: {
    ...mapActions(['addItem']),
  },
}
</script>

<style lang="stylus" scoped>
.card
  cursor pointer
  border-radius .75rem
  height 29rem
  display flex
  flex-direction column
  align-items center

  &:hover
    .card__image
      transform translateY(.5rem)

  &__image
    height 15.8125rem
    width 15.8125rem
    transition transform .2s linear

  &-info
    display flex
    flex-direction column
    height 100%

    &__title
      color #797979
      font-size 24
      font-weight bolder
      width 16rem
      margin-top .5rem
      margin-bottom .75rem

    &__description
      font-size .75rem
      font-weight normal
      color #686466
      width 16rem

    &__cost
      display flex
      justify-content space-between
      width 16rem
      margin-top auto

    &__price
      color #231F20
      font-size 1.5rem
      font-weight bold

    &__cart
      color #231F20
      background-color #F7D22D
      font-size .875rem
      padding .5rem 1.5rem
      border-radius 1.5rem
      border none
      outline none
      cursor pointer
</style>
