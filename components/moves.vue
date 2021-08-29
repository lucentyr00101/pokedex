<template>
  <div>
    <h1>Moves</h1>
    <div class="accordion">
      <template v-for="(move, i) in moves">
        <b-card
          :key="i"
          no-body
          class="mb-1"
        >
          <b-card-header header-tag="header" class="p-1">
            <b-button v-b-toggle="`move-${i}`" block variant="info">
              {{ move.name }}
            </b-button>
          </b-card-header>
          <b-collapse :id="`move-${i}`">
            <b-card-body>
              <b-container fluid>
                <b-row>
                  <b-col lg="7">
                    <b-card-text>{{ move.effect }}</b-card-text>
                  </b-col>
                  <b-col lg="5">
                    <b-card-text>
                      Accuracy: {{ move.accuracy }}
                    </b-card-text>
                    <b-card-text>
                      PP: {{ move.pp }}
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-container>
            </b-card-body>
          </b-collapse>
        </b-card>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    moves: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.accordion
  max-height 400px
  overflow-y auto
</style>
