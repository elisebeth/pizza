<template>
  <section class="cart">
    <div class="container">
      <h1 class="cart__title">Корзина</h1>
      <ul class="cart__list">
        <li class="cart-item">
          <img src="" alt="" class="cart-item__image" />
          <div class="cart-item__wrapper">
            <h2 class="cart-item__title">С креветками и трюфелями</h2>
            <p class="cart-item__description">
              Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
              масло, черный перец, пармезан.350 г
            </p>
          </div>
          <span class="cart-item__price">120&#8381;</span>
          <div class="cart-item__counter">
            <button class="cart-item__button">-</button>
            <span class="cart-item__count">{{}}</span>
            <button class="cart-item__button">+</button>
          </div>
          <button class="cart-item__delete"></button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cart',
  layout: 'Delivery',
}
</script>

<style lang="stylus" scoped>
.container
  width 50rem
</style>
