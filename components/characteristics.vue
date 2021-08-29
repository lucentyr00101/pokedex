<template>
  <div>
    <h1>Characteristics</h1>
    <b-card>
      <template v-for="(char, i) in characteristics">
        <p :key="i">
          <span>{{ char }}</span>
        </p>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    characteristics: {
      type: Array,
      default: () => []
    }
  }
}
</script>
