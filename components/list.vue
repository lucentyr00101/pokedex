<template>
  <b-container>
    <b-row class="form-group">
      <template v-for="(item, i) in list.data">
        <b-col :key="i" lg="3">
          <b-form-group>
            <b-card-group deck>
              <Item
                :details="item.details"
              />
            </b-card-group>
          </b-form-group>
        </b-col>
      </template>
    </b-row>
    <b-row class="form-group">
      <b-col class="text-center">
        <b-button
          variant="primary"
          :disabled="busyList"
          @click="loadMore"
        >
          <b-spinner
            v-if="busyList"
            small
          />
          <span v-else>Load More</span>
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from '@/components/item'

export default {
  components: {
    Item
  },
  computed: {
    ...mapGetters('pokemon', ['list', 'busyList'])
  },
  created () {
    this.$store.dispatch('pokemon/fetchList')
  },
  methods: {
    loadMore () {
      this.$store.dispatch('pokemon/fetchList')
    }
  }
}
</script>
