<template>
  <span>pokemon</span>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('pokemon/fetchPokemon', this.$route.params.name)
  }
}
</script>
