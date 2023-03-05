<template>
  <div>
    <Header />
    <Weather />
  </div>
</template>

<script>
import Header from '../views/Header.vue'
import Weather from '../views/Weather.vue'
export default {
  name: 'WeatherPage',
  components: {
    Header,
    Weather,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
* {
  margin: 0;
}
</style>
