<template>
  <div>
    <Header :weather-data="weatherData" />
    <Weather />
  </div>
</template>

<script>
import Header from '../views/Header.vue'
import Weather from '../views/Weather.vue'
import { fetchWeatherInfo } from '@/services/weather-service'
export default {
  name: 'WeatherPage',
  components: {
    Header,
    Weather,
  },
  data() {
    return {
      weatherData: null,
    }
  },
  methods: {
    async getWeather() {
      this.weatherData = await fetchWeatherInfo().main.city
      console.log(this.weatherData)
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
}
</style>
