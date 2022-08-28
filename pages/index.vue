<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="Index"
    class="page"
  >
    <Hero />
    <Card page="Home" />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Card from '~/components/Card.vue'
export default {
  components: { Hero, Card },
  created () {
    this.$store.commit('menuColor', 'white')
  }
}
</script>
