<template>
  <section class="management-stats"></section>
</template>

<script>
export default {
  name: 'ManagementStats',

  data() {
    return {
      palette: ['#e4c1f9', '#ffb5a7', '#f5cb5c'],

      stats: [
        {
          icon: 'sales',
          title: 'Sales',
          total: 25670,
          percents: 70,
        },
        {
          icon: 'revenue',
          title: 'Revenue',
          total: 14270,
          percents: 80,
        },
        {
          icon: 'expenses',
          title: 'Expenses',
          total: 4570,
          percents: 50,
        },
        {
          icon: 'customers',
          title: 'Customers',
          total: 30521,
          percents: 90,
        },
      ],
    }
  },
}
</script>

<style lang="stylus">
.management-stats
  margin 2rem 0
  display grid
  grid-template-columns 1fr 1fr 1fr
  grid-column-gap .75rem
  grid-row-gap .75rem

  &__item
    border-radius 8px
    padding 1rem
</style>
