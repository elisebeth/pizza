<template>
  <section class="map">
    <div class="container">
      <h2 class="map__title">Оплата и доставка</h2>
      <ul class="map__advantages">
        <li class="advantages__item">
          <img
            src="../../assets/icons/advantage.svg"
            alt=""
            class="advantages__logo"
          />
          <p class="advantages__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </li>
        <li class="advantages__item">
          <img
            src="../../assets/icons/advantage.svg"
            alt=""
            class="advantages__logo"
          />
          <p class="advantages__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </li>
        <li class="advantages__item">
          <img
            src="../../assets/icons/advantage.svg"
            alt=""
            class="advantages__logo"
          />
          <p class="advantages__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </li>
        <li class="advantages__item">
          <img
            src="../../assets/icons/advantage.svg"
            alt=""
            class="advantages__logo"
          />
          <p class="advantages__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </li>
      </ul>
      <script
        type="text/javascript"
        charset="utf-8"
        async
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A75bda7b26d1abfbf8348854082cc41bcdaf6a7fbdf2972f2236834b16237d818&amp;width=1110&amp;height=322&amp;lang=ru_RU&amp;scroll=true"
      ></script>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommonMap',
}
</script>

<style lang="stylus" scoped>
.map
  width 100%
  background #E3ECF5
  padding 4rem 0
  text-align center

  &__title
    font-weight bold
    color #231F20
    font-size 2rem
    margin-bottom 2.5rem

  &__advantages
    display flex
    list-style-type none
    align-items center
    justify-content space-between
    margin-bottom 1.5rem

    .advantages
      &__item
        border-radius 1rem
        background white
        padding 0 1rem 1rem 1rem
        position relative

        &::before
          content ''
          width 4.8125rem
          height 4.8125rem
          border-radius 50%
          background white
          position absolute
          display block
          left 50%
          top -20%
          transform translateX(-50%)

      &__content
        font-size .875rem
        max-width 13.5rem
        font-weight bold
        color #473E43

      &__logo
        position relative
        z-index 12
        margin-bottom .75rem
        width 3.25rem
        height 2.75rem
</style>
