<template>
  <div class="pill" :class="type">
    <span class="text-capitalize">
      {{ type }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.pill
  background #8c8c8c
  border-radius 50px
  padding 2px 15px
  font-size 13px
  font-weight 600
  color #fff
  &.bug
    background #a9b823
  &.dark
    background #6e5747
  &.dragon
    background #6f39f8
  &.electric
    background #f1c22c
  &.fairy
    background #ff66d3
  &.fighting
    background #c03029
  &.fire
    background #ef8030
  &.flying
    background #a890f1
  &.ghost
    background #6e5796
  &.grass
    background #78c74f
  &.ground
    background #dfbd68
  &.ice
    background #98d6d6
  &.normal
    background #a6a676
  &.poison
    background #9e3f9e
  &.psychic
    background #f75889
  &.rock
    background #b89e39
  &.steel
    background #b8b8cf
  &.water
    background #6992ef
  &:not(:last-of-type)
    margin-right 5px
</style>
