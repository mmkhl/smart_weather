<template>
  <div>
    <div class="current__weather">
      <TodayWeather />
      <TomorrowWeather />
    </div>
    <WeaklyWeather />
  </div>
</template>

<script>
import TodayWeather from '@/component/TodayWeather.vue'
import TomorrowWeather from '@/component/TomorrowWeather.vue'
import WeaklyWeather from '@/component/WeeklyWeather.vue'

export default {
  name: 'Weather',
  components: {
    TodayWeather,
    TomorrowWeather,
    WeaklyWeather,
  },
}
</script>

<style scoped>
.current__weather {
  display: flex;
  justify-content: space-between;
}

</style>
