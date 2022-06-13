<template>
  <section class="products">
    <aside class="products-modes">
      <button
        class="products-modes__button"
        @click="currentMode = MODE_TYPES.redactor"
      >
        Редактировать!
      </button>
      <button
        class="products-modes__button"
        @click="currentMode = MODE_TYPES.creator"
      >
        Создавать!
      </button>
    </aside>
    <div class="products__wrapper">
      <div class="products-list">
        <CommonCard
          v-for="(product, index) of products"
          :key="index - 13"
          :product="product"
          :params="{
            admin: true,
            stretch: true,
          }"
        />
      </div>
      <form class="products-redactor" @submit.prevent="onSubmit">
        <legend class="products-redactor__title">Продукт</legend>
        <div v-if="currentMode === MODE_TYPES.redactor">
          <label
            v-for="(value, key, index) of products[currentProduct]"
            v-show="
              value &&
              key !== 'id' &&
              key !== 'createdAt' &&
              key !== 'updatedAt'
            "
            :key="index * 9"
            class="products-redactor__label"
          >
            <span class="products-redactor__subtitle">
              {{ key }} ({{ value }}):
            </span>
            <input
              v-model="product[key]"
              type="text"
              class="products-redactor__input"
            />
          </label>
        </div>
        <div v-else>
          <label
            v-for="(value, key, index) of product"
            v-show="
              value &&
              key !== 'id' &&
              key !== 'createdAt' &&
              key !== 'updatedAt'
            "
            :key="index * 9"
            class="products-redactor__label"
          >
            <span class="products-redactor__subtitle"> {{ key }}: </span>
            <input
              v-model="product[key]"
              type="text"
              class="products-redactor__input"
            />
          </label>
        </div>
        <button class="products-redactor__button">Готово</button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ManagementProducts',

  data() {
    return {
      currentProduct: 0,
      currentMode: 'redactor',

      MODE_TYPES: {
        redactor: 'redactor',
        creator: 'creator',
      },

      product: {
        title: 'some-title',
        description: 'description',
        image: 'some-image',
        price: 8800,
        available: true,
        value: 998,
      },
    }
  },

  fetch() {
    this.getAllProducts()
  },

  computed: {
    products() {
      return this.$store.getters.products
    },
  },

  methods: {
    ...mapActions([
      'getAllProducts',
      'createProduct',
      'deleteProductById',
      'updateProductById',
    ]),

    onSubmit() {
      console.log(this.product)
      if (this.currentMode === this.MODE_TYPES.redactor) {
        this.updateProductById(this.product)
      } else {
        this.createProduct(this.product)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.products
  padding  0 1.5rem
  width 100%
  height 100%

  ::-webkit-scrollbar
    width .25rem

  ::-webkit-scrollbar-track
    background alpha(#888, .7)
    border-radius 8px

  ::-webkit-scrollbar-thumb
    background #F7D22D
    border-radius 8px

  &-modes
    display flex
    align-items center
    position absolute
    transform translateY(calc(-100% - 2rem))

    &__button
      font-weight 600
      color #000
      outline none
      font-size .75rem
      padding .75rem
      cursor pointer
      margin-right 1.5rem

  &__wrapper
    width 100%
    display grid
    grid-template-columns 3fr 1.5fr
    grid-column-gap 1rem

  &-list
    overflow-y scroll
    max-height 80vh
    padding-bottom 4rem

  &-redactor
    padding 1rem
    border 2px solid #F7D22D
    border-radius 8px
    display flex
    max-height calc(100vh - 35vh)
    flex-direction column

    &__title
      font-weight 500
      font-size 1.5rem
      text-align center
      margin-bottom 2rem

    &__label
      display flex
      flex-direction column
      width 100%

      &:not(:last-child)
        margin-bottom .75rem

    &__subtitle
      font-weight 500
      font-size 1rem
      margin-bottom .25rem

    &__input
      padding .5rem .75rem
      font-weight 500
      font-size 1rem
      outline none
      color #777
      border-radius 8px
      border 2px solid #ccc
      transition color .2s

      &:focus
        color #000

    &__button
      outline none
      font-size 1rem
      font-weight 600
      padding .75rem
      margin-top 1.5rem
      cursor pointer
</style>
