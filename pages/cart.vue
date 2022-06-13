<template>
  <section class="cart">
    <div class="container">
      <h1 class="cart__title">Корзина</h1>
      <CartList />
      <h2 class="cart__primary-title">Добавить к заказу?</h2>
      <CommonCarousel
        :items="smallCards"
        :options="{
          component: 'CarouselSuggest',
          visibleRowSize: 4,
          margin: 16,
        }"
      />
      <h2 class="cart__primary-title">Соусы к бортикам и закускам</h2>
      <CartListSouces />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cart',
  layout: 'Delivery',
  middleware: ['auth'],

  data() {
    return {
      smallCards: [
        {
          image: 'pizza',
          title: 'Pizza',
          price: 2500,
        },
        {
          image: 'pizza',
          title: 'Pizza',
          price: 2500,
        },
        {
          image: 'pizza',
          title: 'Pizza',
          price: 2500,
        },
        {
          image: 'pizza',
          title: 'Pizza',
          price: 2500,
        },
        {
          image: 'pizza',
          title: 'Pizza',
          price: 2500,
        },
        {
          image: 'pizza',
          title: 'Pizza',
          price: 2500,
        },
        {
          image: 'pizza',
          title: 'Pizza',
          price: 2500,
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 768px)
  .cart
    font-size 12px !important

.cart

  &__title
    color #F7D22D
    font-size 2rem
    font-weight 800
    margin 2rem 0

  &__primary

    &-title
      font-size 1.5rem
      font-weight bold
      color #473E43
      margin 2rem 0
</style>
