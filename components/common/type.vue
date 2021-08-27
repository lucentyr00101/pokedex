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
.pill:not(:last-of-type)
  margin-right 5px
</style>
