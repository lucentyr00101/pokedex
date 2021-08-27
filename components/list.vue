<template>
  <b-container>
    <b-row>
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
    ...mapGetters('pokemon', ['list'])
  },
  created () {
    this.$store.dispatch('pokemon/fetchList')
  }
}
</script>
