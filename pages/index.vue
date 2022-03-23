<template>
  <div class="app">
    <CommonCarousel :promotions="promotions" />
    <div class="container">
      <CommonSmallCard />
      <CommonList />
      <!-- <CommonDialog /> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'Default',

  data() {
    return {
      promotions: [],
    }
  },

  computed: mapGetters(['pin']),

  mounted() {
    console.log(this.pin)
  },
}
</script>
