<template>
  <b-card
    :img-src="pokemonImage"
    :img-alt="details.name"
    img-top
    header-class="text-capitalize"
    class="form-group"
  >
    <b-card-title>
      <span class="text-capitalize">
        {{ details.name }}
      </span>
    </b-card-title>
    <b-card-text>
      <div class="d-flex">
        <Type
          v-for="(type, index) in details.types"
          :key="index"
          :type="type.type.name"
        />
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
import Type from '@/components/common/type'

export default {
  components: {
    Type
  },
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    pokemonImage () {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.details.id}.png`
    }
  }
}
</script>

<style lang="stylus" scoped>
.card
  cursor pointer
</style>
