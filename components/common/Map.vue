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
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1245a4f1c9037e1a4a710701278ba4de41933403a9338a22dec5f798cf7c74e&amp;source=constructor"
        width="1110"
        height="322"
        frameborder="0"
        class="map__constructor"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommonMap',
}
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 756px)
  .map
    padding 4rem 2rem !important

    &__advantages
      flex-direction column !important
      align-items center

      .advantages
        &__item
          width 100% !important
          display flex
          flex-direction column
          align-items center

          &:not(:last-child)
            margin-bottom 2.5rem !important

    &__constructor
      width 100% !important

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
        font-size 10px
        max-width 216px
        font-weight bold
        color #473E43

      &__logo
        position relative
        z-index 12
        margin-bottom .75rem
        width 3.25rem
        height 2.75rem


  &__constructor
    width 100%
    height 20.125rem
    border-radius 1rem
</style>
