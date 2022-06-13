<template>
  <aside class="management-navigation">
    <div
      v-for="(link, index) of links"
      :key="index"
      class="management-navigation__item"
      :class="{ active: index === currentItem }"
      @click="selectItem(link, index)"
    >
      <img
        :src="require(`../../assets/icons/management/${link.icon}.svg`)"
        :alt="link.title"
        class="item__icon"
      />
      <span class="item__title">{{ link.title }}</span>
    </div>
  </aside>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ManagementNavigation',

  data() {
    return {
      currentItem: 0,

      links: [
        {
          icon: 'dashboard',
          title: 'Dashboard',
          path: 'dashboard',
        },
        {
          icon: 'orders',
          title: 'Orders',
          path: 'orders',
        },
        {
          icon: 'customers',
          title: 'Customers',
          path: 'customers',
        },
        {
          icon: 'products',
          title: 'Products',
          path: 'products',
        },
        {
          icon: 'analytics',
          title: 'Analytics',
          path: 'analytics',
        },
      ],
    }
  },

  methods: {
    ...mapMutations(['SET_CURRENT_COMPONENT']),
    selectItem(item, index) {
      this.currentItem = index
      this.SET_CURRENT_COMPONENT(item)
    },
  },
}
</script>

<style lang="stylus">

.management-navigation
  display flex
  flex-direction column
  padding 1rem
  border 2px solid #F7D22D
  border-radius 8px
  margin-top 4rem
  height 75vh

  .active
    background alpha(#F7D22D, .45)

  &__item
    display flex
    align-items center
    padding .75rem 1.5rem
    border-radius .5rem
    cursor pointer
    transition background .2s

    &:not(:last-child)
      margin-bottom 1rem

    &:hover
      background alpha(#F7D22D, .45)

    .item
      &__icon
        width 1.5rem
        height 1.5rem
        margin-right 1.5rem

      &__title
        font-weight 500
        font-size 1rem
</style>
