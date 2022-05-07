<template>
  <div class="card">
    <img
      src="../../assets/images/discount_image.png"
      alt="img"
      class="card__image"
    />
    <div class="card__wrapper">
      <h2 class="card__title">Дарим кибер-призы</h2>
      <p class="card__description">
        Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от
        MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite.
        А также станьте автоматическим участником розыгрыша игровых ключей и
        больших пицц 29 июня.
      </p>
      <button class="card__button">Посмотреть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonDiscoundCard',
};
</script>

<style lang="stylus" scoped>
.card
  border-radius 1rem
  box-shadow 0px 4px 24px rgba(0, 0, 0, 0.06)
  cursor pointer
  transition box-shadow .2s linear

  &:hover
    box-shadow 0px 4px 32px rgba(0, 0, 0, 0.20)

  &__image
    width 100%

  &__wrapper
    padding 1rem

  &__title
    font-weight bold
    color #0E0C0D
    font-size 1.25rem
    margin-bottom .5rem

  &__description
    font-size .75rem
    color #797979
    font-weight medium
    margin-bottom 1.25rem

  &__button
    outline none
    background #F7D22D
    padding .5rem 2rem
    border none
    border-radius .5rem
    color #473E43
    font-weight bold
    font-size .875rem
    cursor pointer
</style>
