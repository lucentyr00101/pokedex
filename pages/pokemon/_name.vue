<template>
  <b-container fluid>
    <b-row>
      <b-col lg="3">
        <b-card
          v-if="!busy"
          :img-src="pokemonImage"
          img-top
          header-class="text-capitalize"
          class="form-group"
        >
          <b-card-title>
            <span class="text-capitalize">
              {{ pokemon.name }}
            </span>
          </b-card-title>
        </b-card>
      </b-col>
      <b-col lg="9">
        <span>Col 8</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('pokemon', ['pokemon', 'busy']),
    pokemonImage () {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`
    }
  },
  created () {
    this.$store.dispatch('pokemon/fetchPokemon', this.$route.params.name)
  }
}
</script>
