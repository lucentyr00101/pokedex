<template>
  <div>
    <Header />
    <div class="py-5">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  components: {
    Header
  }
}
</script>
