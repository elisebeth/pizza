<template>
  <section class="account">
    <div class="container">
      <form action="#" class="account__form">
        <legend class="form__title">Личные данные</legend>
        <label for="name" class="form__clause">Имя</label>
        <div class="form__box">
          <input
            v-model.trim="username"
            type="text"
            class="form__input"
            placeholder="Your name"
          />
          <span class="form__special">Изменить</span>
        </div>
        <label for="email" class="form__clause">Почта</label>
        <input
          v-model.trim="email"
          type="email"
          class="form__input"
          style="margin-bottom: 0.75rem"
          placeholder="example@example.com"
        />
        <label for="name" class="form__clause">День рождения</label>
        <input
          v-model.trim="birthday"
          type="date"
          class="form__input"
          style="padding-right: 1.25rem; margin-bottom: 0.75rem"
        />
        <label for="name" class="form__clause">Номер телефона</label>
        <div class="form__box">
          <input
            v-model.trim.number="number"
            type="tel"
            class="form__input"
            placeholder="+7-(800)-555-35-35"
          />
          <span class="form__special">Сохранить</span>
          <span class="form__special outer">Отменить</span>
        </div>
        <label for="name" class="form__clause">Код</label>
        <div class="form__box">
          <input
            v-model.trim.number="passcode"
            type="text"
            class="form__input"
            placeholder="1337"
          />
          <span class="form__special">Изменить</span>
        </div>
      </form>

      <h2 class="account__title">Подписки</h2>
      <label class="account-subscribe">
        <input
          v-model="isSubscribed"
          type="checkbox"
          class="account-subscribe__check"
        />
        <span class="account-subscribe__text">
          Сообщать о бонусах, акциях и новых продуктах
        </span>
      </label>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Account',

  data() {
    return {
      username: '',
      email: '',
      number: '',
      birthday: '',
      passcode: '',
      isSubscribed: false,
    }
  },
}
</script>

<style lang="stylus" scoped>
.outer
  transform translateY(-50%) translateX(calc(100% + 2.5rem)) !important

.account
  padding 4rem 0

  &__form
    display flex
    flex-direction column
    width 21.875rem

    .form
      &__title
        color #F7D22D
        font-size 1.875rem
        font-weight 800
        margin-bottom 1.5rem

      &__clause
        color #231F20
        font-size 0.875rem
        opacity .7
        font-weight 700
        margin-bottom 1rem

      &__input
        width 100%
        background #fff
        border 1.5px solid #E3ECF5
        border-radius 8px
        color #231F20
        opacity .8
        font-size 0.9375rem
        font-weight 700
        line-height 1.75rem
        padding 0.625rem 7rem 0.625rem 1.25rem
        outline none
        transition background .2s linear

        &:focus, &:not(:placeholder-shown)
          background rgba(241, 242, 245, 0.6)

      &__box
        display flex
        position relative
        width 100%
        margin-bottom 0.75rem

      &__special
        position absolute
        right 1.25rem
        top 50%
        transform translateY(-50%)
        cursor pointer
        color #F7D22D
        opacity .8
        font-weight 700
        font-size 0.9375rem

  &__title
    color #F7D22D
    font-size 1.5rem
    font-weight 800
    margin-top 2rem
    margin-bottom 1rem

  &-subscribe
    display flex
    align-items center

    &::after
      content 'i'
      width 1.625rem
      height 1.625rem
      display flex
      align-items center
      justify-content center
      border-radius 50%
      background #F1F2F5
      color #231F20
      opacity .8
      font-weight 700
      font-size .875rem
      cursor pointer
      margin-left .75rem

    &__check
      -webkit-appearance none
      -moz-appearance none
      appearance none
      border-radius 50%
      width 1.1875rem
      height 1.1875rem
      border 2px solid #F7D22D
      margin-right 1rem
      cursor pointer
      display flex
      align-items center
      justify-content center

      &::before
        content ''
        width .4375rem
        height .4375rem
        background #F7D22D
        border-radius 50%
        opacity 0
        transition opacity .2s linear

      &:checked:before
        opacity 1

    &__text
      cursor pointer
      color #231F20
      opacity .7
      font-size .875rem
      font-weight 700
</style>
