<template>
  <b-container fluid>
    <b-row>
      <b-col lg="3">
        <Pokemon :details="pokemon" />
      </b-col>
      <b-col lg="9">
        <b-container fluid>
          <b-row class="form-group">
            <b-col>
              <Characteristics :characteristics="pokemon.characteristics" />
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col lg="3">
              <Stats :stats="pokemon.stats" />
            </b-col>
            <b-col lg="3">
              <Moves :moves="pokemon.moves" />
            </b-col>
            <b-col lg="6">
              <Evolution :evolution="pokemon.evolution" />
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Pokemon from '@/components/item'
import Moves from '@/components/moves'
import Stats from '@/components/stats'
import Characteristics from '@/components/characteristics'
import Evolution from '@/components/evolution'

export default {
  components: {
    Pokemon,
    Moves,
    Stats,
    Characteristics,
    Evolution
  },
  computed: {
    ...mapGetters('pokemon', ['pokemon', 'busy'])
  },
  created () {
    this.$store.dispatch('pokemon/fetchPokemon', this.$route.params.name)
  },
  beforeDestroy () {
    this.$store.commit('pokemon/clearPokemon')
  }
}
</script>
