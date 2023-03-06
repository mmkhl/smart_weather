<template>
  <div>
    <div class="current__weather">
      <TodayWeather />
      <TomorrowWeather />
    </div>
    <WeeklyWeather />
  </div>
</template>

<script>
import TodayWeather from '@/component/weather/TodayWeather.vue'
import TomorrowWeather from '@/component/weather/TomorrowWeather.vue'
import WeeklyWeather from '@/component/weather/WeeklyWeather.vue'

export default {
  name: 'Weather',
  components: {
    TodayWeather,
    TomorrowWeather,
    WeeklyWeather,
  },
}
</script>

<style scoped>
.current__weather {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
