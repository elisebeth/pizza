<template>
  <footer class="footer">
    <div class="container">
      <section class="footer__wrapper">
        <h2 class="footer__title">Fibo pasta bar</h2>
        <article class="footer-info">
          <button class="footer-info__button">Калорийность и состав</button>
          <button class="footer-info__button">Правовая информация</button>
        </article>
        <article class="footer-contacts">
          <h2 class="footer-contacts__title">Мы в соцсетях</h2>
          <ul class="footer-contacts__list">
            <li
              v-for="(contact, index) of contacts"
              :key="index"
              class="footer-contacts__item"
            >
              {{ contact }}
            </li>
          </ul>
        </article>
        <p class="footer__rights">YaBao Все права защищены &#169; 2022</p>
      </section>
      <section class="footer__wrapper">
        <article class="footer-socials">
          <h2 class="footer-socials__title">
            Остались вопросы? А мы всегда на связи:
          </h2>
          <ul class="footer-socials__list">
            <li
              v-for="(icon, index) of icons"
              :key="index"
              class="footer-socials__item"
            >
              <img
                :src="require(`../assets/icons/${icon}.svg`)"
                alt=""
                class="footer-socials__icon"
              />
            </li>
          </ul>
          <h2 class="footer-socials__number">8 499 391-84-49</h2>
          <button class="footer-socials__button">Заказать звонок</button>
        </article>
      </section>
    </div>
    <img src="../assets/images/footer_logo.png" alt="" class="footer__logo" />
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
  data() {
    return {
      contacts: ['Youtube', 'Facebook', 'Instagram', 'Вконтакте'],
      icons: [
        'viber',
        'skype',
        'whatsapp',
        'facebook',
        'vkontakte',
        'telegram',
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 756px)
  .footer
    padding 4.5rem 2rem !important

    &__wrapper:first-child
      margin-bottom 2rem

  .container
    flex-direction column !important


.container
  display flex
  justify-content space-between

.footer
  padding 4.5rem 0
  position relative

  &__wrapper
    display flex
    flex-direction column
    z-index 999999

  &__title
    font-size 3rem
    font-weight bold
    color #F7D22D
    cursor default

  &-info
    display flex
    justify-content space-between

    &__button
      outline none
      border none
      cursor pointer
      padding .75rem 1rem
      border-radius 2rem
      font-size .875rem
      margin-top 2.625rem
      margin-bottom 1.5rem
      color #0E0C0D
      font-weight bold
      background-color #F7D22D
      margin-right 1rem

  &-contacts
    &__title
      font-size 1rem
      font-weight bold
      color #0E0C0D
      margin-bottom 1.5rem
      cursor default

    &__list
      display grid
      grid-template-columns .35fr .35fr
      grid-template-rows 1fr 1fr
      grid-row-gap .5rem
      grid-column-gap 2rem
      list-style-type none
      margin-bottom 3rem

    &__item
      font-weight normal
      font-size 1rem
      cursor pointer

  &__rights
    cursor default
    color #F7D22D
    font-weight 800

  &-socials
    &__title
      font-weight bold
      font-size 1rem
      text-transform: uppercase

    &__list
      display grid
      list-style-type none
      grid-template-rows 1fr 1fr
      grid-template-columns repeat(3, 1fr)
      grid-row-gap .5rem
      grid-column-gap 1rem
      margin-top 2rem
      margin-bottom 3rem

    &__item
      display flex
      justify-content center
      cursor pointer
      border .125rem #E3ECF5 solid
      border-radius 1rem
      padding .75rem 2.25rem

    &__number
      color #F7D22D
      font-weight bold
      font-size 2rem
      margin-bottom 1rem

    &__button
      padding .875rem 1.75rem
      border none
      outline none
      cursor pointer
      border-radius 2rem
      background-color #F3F3F7
      color #696F7A
      font-size .875rem
      font-weight bold

    &__icon
      width 1.875rem
      height 1.875rem

  &__logo
    position absolute
    bottom 0
    right 0
    width 20rem
    height 7.5rem
</style>
