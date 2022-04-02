<template>
  <ul class="cart__list">
    <li v-for="index in 3" :key="index" class="cart-item">
      <img src="../assets/images/pizza.png" alt="" class="cart-item__image" />
      <div class="cart-item__wrapper">
        <h2 class="cart-item__title">С креветками и трюфелями</h2>
        <p class="cart-item__description">
          Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло,
          черный перец, пармезан.350 г
        </p>
      </div>
      <div class="cart-item__box">
        <span class="cart-item__price">120&#8381;</span>
        <div class="cart-item__counter">
          <button class="cart-item__button">-</button>
          <span class="cart-item__count">1</span>
          <button class="cart-item__button">+</button>
        </div>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="cart-item__delete"
        >
          <path d="M7 7L19 19" stroke="#696F7A" />
          <path d="M7 19L19 7" stroke="#696F7A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
            fill="#696F7A"
          />
        </svg>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CartList',
}
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 768px)
  .cart

    &-item
      flex-direction column !important
      align-items center !important

      &__image
        width 12rem !important
        height 12rem !important

      &__wrapper
        text-align center !important
        padding 1rem 0 !important

      &__title
        font-size 2rem !important

      &__description
        font-size 1.5rem !important
        margin 0 !important
        width 100% !important

      &__counter
        padding 1rem 1.5rem !important

      &__price
        font-size 2.5rem !important

      &__delete
        width 3rem !important
        height 3rem !important

      &__button
        font-size 2rem !important

      &__count
        font-size 1.75rem !important



.cart

  &__list
    border-top 1px solid #ECECF1
    border-bottom 1px solid #ECECF1

  &-item
    display flex
    padding 1.75rem 0
    align-items center
    border-bottom #ECECF1 .0625rem solid

    &:last-child
      border none

    &__image
      margin-right 1.5rem
      width 4.5rem
      height 4.5rem


    &__title
      font-size 1.125rem
      font-weight bold
      color #0E0C0D
      margin-bottom .5rem

    &__description
      font-size .75rem
      font-weight normal
      color #686466
      width 25.625rem

    &__price
      font-weight 800
      font-size 1.5rem
      color #F7D22D

    &__counter
      background #F3F3F7
      border-radius .5rem
      padding .5rem .875rem
      margin 0 2rem

    &__button
      background none
      outline none
      cursor pointer
      font-size 1.125rem
      font-weight 800
      color #696F7A
      border none

    &__count
      font-size 1.125rem
      font-weight bold
      color #696F7A
      margin 0 1.25rem

    &__delete
      cursor pointer
      width 1.625rem
      height 1.625rem
      transition all .3s

      &:hover
        fill #F7D22D

        path
          stroke #F7D22D

    &__box
      display flex
      align-items center
</style>
