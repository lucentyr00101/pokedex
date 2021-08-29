<template>
  <div>
    <h1>Stats</h1>
    <b-card>
      <template v-for="(stat, i) in stats">
        <p :key="i">
          <span>{{ stat.name }}: </span>
          <span>{{ stat.value }}</span>
        </p>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      default: () => []
    }
  }
}
</script>
