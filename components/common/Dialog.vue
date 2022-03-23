<template>
  <article class="dialog">
    <div class="dialog__wrapper">
      <img src="../../assets/images/preview.png" alt="" class="dialog__image" />
      <section class="dialog-product">
        <h2 class="dialog-product__title">С креветками и трюфелями</h2>
        <h3 class="dialog-product__info">
          25см, {{ currentDough }} тесто, 360г
        </h3>
        <p class="dialog-product__composition">Моцарелла, соус альфредо</p>
        <ul class="dialog-product__options">
          <li
            v-for="(size, index) of sizes"
            :key="index"
            class="dialog-product__size"
          >
            {{ size }}
          </li>
          <li
            v-for="(dough, index) of dough"
            :key="index"
            class="dialog-product__dough"
          >
            {{ dough }}
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CommonDialog',
  props: ['product'],
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['currentDough', 'currentSize']),
  },
}
</script>

<style lang="stylus" scoped>
.dialog
  display flex
  align-items center
  justify-content center
  background alpha(#F7D22D, .45)
  position fixed
  height 100%
  width 100%
  top 0
  left 0

  &__wrapper
    padding 2rem
    background #fff
    border-radius .75rem
    box-shadow 0rem .25rem 1.75rem rgba(0, 0, 0, 0.08), 0rem .25rem 1.75rem rgba(0, 0, 0, 0.08)
</style>
