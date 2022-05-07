<template>
  <aside class="preview">
    huihuihuihiuhui
  </aside>
</template>

<script>
export default {
  name: 'Preview'
};
</script>

<style lang="stylus" scoped>
.preview
  padding 1.5rem
  border-radius 10px
  border 3px solid rgba(247, 210, 45, 0.4)
  background #fff
  position absolute
  top 0
  right 0
  transform translateY(calc(100% - 1.5rem))
  z-index 999
  display flex
  flex-direction column
  filter: drop-shadow(0px 4px 28px rgba(0, 0, 0, 0.08))

  &::before
    content ''
    width 23px
    height 23px
    display block
    background #fff
    transform rotate(45deg)
    position absolute
    top -0.5rem
    right 2rem

</style>
