<template>
  <div class="container">
    <button class="carousel__button" @click="slide(-1)">
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="carousel__button--icon"
      >
        <path
          d="M0.996094 6.90625C0.732422 7.16992 0.732422 7.60938 0.996094 7.87305L6.67969 13.5859C6.97266 13.8496 7.41211 13.8496 7.67578 13.5859L8.34961 12.9121C8.61328 12.6484 8.61328 12.209 8.34961 11.916L3.83789 7.375L8.34961 2.86328C8.61328 2.57031 8.61328 2.13086 8.34961 1.86719L7.67578 1.19336C7.41211 0.929688 6.97266 0.929688 6.67969 1.19336L0.996094 6.90625Z"
          fill="#231F20"
        />
      </svg>
    </button>
    <div
      ref="carousel"
      class="carousel"
      :style="{ transform: `translateX(-${currentTranslate})` }"
    >
      <CommonCarouselItem
        v-for="(item, index) of promotions"
        :key="index"
        ref="item"
        :promotion="item"
        :class="{ opacity: index !== currentItem && index !== currentItem + 1 }"
      />
    </div>
    <button class="carousel__button" @click="slide(1)">
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="carousel__button--icon"
      >
        <path
          d="M8.00391 7.09375C8.26758 6.83008 8.26758 6.39062 8.00391 6.12695L2.32031 0.414062C2.02735 0.15039 1.58789 0.15039 1.32422 0.414062L0.650392 1.08789C0.38672 1.35156 0.38672 1.79101 0.650392 2.08398L5.16211 6.625L0.650391 11.1367C0.38672 11.4297 0.38672 11.8691 0.650391 12.1328L1.32422 12.8066C1.58789 13.0703 2.02734 13.0703 2.32031 12.8066L8.00391 7.09375Z"
          fill="#231F20"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const INTERVAL_TIME = 10000
const DEFAULT_FONT_SIZE = 16

const DEFAULT_MARGIN = 32
const DEFAULT_ITEM_SIZE = 540

export default {
  name: 'CommonCarousel',
  props: ['promotion'],
  data() {
    return {
      currentItem: 0,
      currentTranslate: 0,
      currentItemSize: null,
    }
  },

  computed: {
    ...mapGetters(['promotions']),
  },

  mounted() {
    setTimeout(() => {
      this.translate()
    }, 200)

    this.resetInterval()

    window.addEventListener('resize', (event) => {
      this.translate()
    })
  },

  beforeDestroy() {
    clearInterval(this.interval)
  },

  methods: {
    translate() {
      this.currentTranslate =
        this.currentItem * (this.size() + this.translation()) + 'px'
    },

    slide(value) {
      if (
        this.currentItem + value > -1 &&
        this.currentItem + value < this.promotions.length - 1
      ) {
        this.currentItem += value
        this.resetInterval()
      } else if (this.currentItem + value === this.promotions.length - 1) {
        this.resetAnimation(0)
        this.resetInterval()
      } else if (this.currentItem + value === -1) {
        this.resetAnimation(this.promotions.length - 2)
        this.resetInterval()
      }
      this.translate()
    },

    resetAnimation(value) {
      this.$refs.carousel.style.transition = 'none'
      this.currentItem = value
      setTimeout(() => {
        this.$refs.carousel.style.transition = 'transform .4s linear'
      }, 300)
    },

    resetInterval() {
      clearInterval(this.interval)

      this.interval = setInterval(() => {
        this.slide(1)
      }, INTERVAL_TIME)
    },

    difference() {
      const html = document.querySelector('html')
      const fontSize = parseInt(
        window.getComputedStyle(html).getPropertyValue('font-size')
      )

      return fontSize / DEFAULT_FONT_SIZE
    },

    translation() {
      return DEFAULT_MARGIN * this.difference()
    },

    size() {
      return DEFAULT_ITEM_SIZE * this.difference()
    },
  },
}
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 756px)
  .carousel
    padding 0 2rem

    &__button
      &:first-child
        left 2rem !important

      &:last-child
        right 2rem !important

.opacity
  opacity .6
  transform scale(.9)

.container
  position relative
  height 19.5rem
  margin-bottom 4rem

  ::-moz-scrollbar-width
    width 0

.carousel
  display flex
  width 100%
  align-items center
  position absolute
  transition transform .4s linear
  top 0
  left 0

  &__button
    cursor pointer
    z-index 9999999
    height 32px
    width 32px
    background-color #F7D22D
    opacity 0.9
    border-radius 1.875rem
    outline none
    border none
    position absolute
    top 50%
    transform translateY(-50%)
    display flex
    align-items center
    justify-content center

    &:first-child
      left -3rem

    &:last-child
      right -3rem

    &--icon
      width 9px
</style>
