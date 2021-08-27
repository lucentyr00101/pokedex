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
      This card has supporting text below as a natural lead-in to additional
      content.
    </b-card-text>
    <template #footer>
      <small class="text-muted">
        Last updated 3 mins ago
      </small>
      <div class="d-flex">
        <Type
          v-for="(type, index) in details.types"
          :key="index"
          :type="type.type.name"
        />
      </div>
    </template>
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
