<template>
  <div>
    <h1>Evolution Chain</h1>
    <b-row class="form-group">
      <b-col
        v-for="(evo, i) in evolution"
        :key="i"
      >
        <Item
          :details="evo"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    evolution: {
      type: Array,
      default: () => []
    }
  }
}
</script>
