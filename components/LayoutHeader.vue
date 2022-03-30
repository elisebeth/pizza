<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <img
          src="../assets/icons/logo.svg"
          alt="logo"
          class="header__logo"
          @click="$router.push('/')"
        />
        <div class="header__delivery">
          <h2 class="delivery__title">
            Доставка пасты <span class="delivery__special">Москва</span>
          </h2>
          <ul class="delivery__info">
            <li class="info__item">
              <img
                src="../assets/icons/yandex-food-logo.svg"
                alt="yandex logo"
                class="info__logo"
              />
              <span class="info__title">Яндекс еда</span>
              <span class="info__title mark">{{ markRate }}</span>
            </li>
            <li class="info__item">
              <span class="info__title">Время доставки</span>
              <span class="info__title minutes">от {{ deliveryTime }} мин</span>
            </li>
          </ul>
        </div>
        <button class="header__button">Заказать звонок</button>
        <span class="header__number">8 499 391-84-49</span>
        <button class="header__cart" @click="$router.push('/cart')">
          Корзина | {{ countCartItems }}
        </button>
        <LayoutBurger class="burger" />
      </div>
      <div class="header__wrapper">
        <nav class="header__navigation">
          <nuxt-link
            v-for="(category, index) of categories"
            :key="index"
            :to="'/category/' + category.path"
            class="navigation__item"
            :class="{ active: currentCategory === index }"
            @click.native="switchCurrentCategory(index)"
            >{{ category.name }}</nuxt-link
          >
        </nav>
        <nuxt-link to="/login" class="header__link">Войти</nuxt-link>
        <button class="header__cart" @click="$router.push('/cart')">
          Корзина | {{ countCartItems }}
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',

  data() {
    return {
      categories: [
        {
          name: 'Пицца',
          path: 'pizza',
        },
        {
          name: 'Паста',
          path: 'pasta',
        },
        {
          name: 'Супы',
          path: 'soup',
        },
        {
          name: 'Салаты',
          path: 'salad',
        },
        {
          name: 'Напитки',
          path: 'drink',
        },
        {
          name: 'Дессерты',
          path: 'dessert',
        },
        {
          name: 'Бакалея',
          path: 'grocery',
        },
        {
          name: 'Антипасты',
          path: 'antipasta',
        },
        {
          name: 'Акции',
          path: 'discounts',
        },
        {
          name: 'Комбо',
          path: 'combo',
        },
        {
          name: 'Контакты',
          path: 'contact',
        },
      ],

      markRate: 4.8,
      deliveryTime: 31, // parameter is counting in minutes
      currentCategory: null,
      countCartItems: 10,
    }
  },

  methods: {
    switchCurrentCategory(index) {
      this.currentCategory = index
    },
  },
}
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 47.25rem)
  .header__number
    display none !important


@media(max-width 72.5rem)
  .burger
    display block !important

  .header
    padding 1rem 2rem !important

    &__wrapper:last-child
      display none !important

    &__delivery
      display none !important

    &__button
      display none !important

    &__logo
      margin-right auto !important

    &__number + .header__cart
      display block !important
      margin-left 1.5rem !important


.burger
  display none

.mark
  &::before
    content ''
    display block
    width .25rem
    height .25rem
    border-radius 50%
    background #ff2e65
    margin 0 .5rem

  &::after
    content ''
    width .875rem
    height 1rem
    background url('../assets/icons/star.svg') center / contain no-repeat
    margin-left 0.37vh

.minutes
  &::before
    content ''
    display block
    width .25rem
    height .25rem
    border-radius 50%
    background #ff2e65
    margin 0 .5rem

.active
  color #F7D22D !important

.header
  padding 1rem 0

  &__wrapper
    width 100%
    display flex
    align-items center

  &__logo
    width 5rem
    height 5rem
    cursor pointer
    margin-right 3.25rem

  &__delivery
    display flex
    flex-direction column
    margin-right auto

    .delivery
        &__title
          font-weight 600
          font-size 1.0625rem
          color #231F20
          margin-bottom .5rem

        &__special
          color #F7D22D

        &__info
          display flex
          align-items center
          list-style-type none

          .info
            &__item
              display flex
              align-items center
              font-weight bold
              font-size .8125rem
              color #231F20

              &:not(:last-child)
                margin-right 1.25rem

            &__logo
              margin-right .5rem

            &__title
              display flex
              align-items center

  &__button
    font-size .875rem
    font-weight bold
    color #696F7A
    cursor pointer
    border none
    background #F3F3F7
    border-radius 1.75rem
    padding .5rem 1.75rem
    line-height 1.75rem
    margin-right 1.75rem

  &__number
    color #F7D22D
    font-weight bold
    font-size 1.625rem

  &__number + .header__cart
    display none

  &__navigation
    display flex
    align-items center

    .navigation__item
      color #0E0C0D
      font-size .9375rem
      font-weight 600
      text-decoration none
      transition color .2s

      &:not(:last-child)
        margin-right 1rem

      &:hover
        color #F7D22D

  &__link
    color #696F7A
    margin 0 2rem
    text-decoration none
    font-weight bold

  &__cart
    color #231F20
    font-weight bold
    font-size 1rem
    border-radius .5rem
    background #F7D22D
    padding .5rem 1.5rem
    border none
    cursor pointer
    white-space nowrap
</style>
