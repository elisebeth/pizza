<template>
  <section class="souces">
    <div class="container">
      <ul class="souces__list">
        <li
          v-for="(souce, index) of cartSouces"
          :key="index"
          class="souces-item"
          :class="{ active: currentSouces.includes(souce) }"
          @click="selectItem(souce)"
        >
          <img
            :src="require(`../assets/images/souce-${souce.image}.png`)"
            alt=""
            class="souces-item__image"
          />
          <p class="souces-item__title">{{ souce.title }}</p>
          <p class="souces-item__price">от {{ souce.price }} &#8381;</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CartListSouces',

  computed: {
    ...mapGetters(['cartSouces', 'currentSouces']),
  },
  methods: {
    ...mapActions(['addSouces', 'deleteSouce']),
    selectItem(souce) {
      if (this.currentSouces.includes(souce)) this.deleteSouce(souce)
      else this.addSouces(souce)
    },
  },
}
</script>

<style lang="stylus" scoped>
.active
  border #F7D22D .125rem solid !important

.souces

  &__list
    display flex
    justify-content space-between

  &-item
    border .125rem #E2E2E9 solid
    padding .875rem 1.5rem 2rem 1.5rem
    display flex
    flex-direction column
    align-items center
    border-radius .75rem
    width 8.5625rem
    position relative
    cursor pointer

    &__title
      color #000000
      font-size .8125rem
      font-weight 600
      margin .75rem 0
      text-align center

    &__price
      position absolute
      font-size .875rem
      font-weight bold
      color #FF2E65
      bottom 0
      transform translateY(-80%)
</style>
