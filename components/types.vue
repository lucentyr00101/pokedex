<template>
  <b-card>
    <div
      v-for="(dmgType, i) in types"
      :key="i"
      class="mb-2"
    >
      <div v-if="dmgType.length">
        <strong>{{ snakeToSentence(i) }}</strong>
        <div class="d-flex">
          <Type
            v-for="(type, x) in dmgType"
            :key="x"
            :type="type.name"
          />
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
import { snakeToSentence } from '@/utils/formatter'
import Type from '@/components/common/type'

export default {
  components: {
    Type
  },
  props: {
    types: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    snakeToSentence
  }
}
</script>
