<template>
  <div class="today__weather">
    <div class="block__info">
      <h2>Today</h2>
      <img :src="getImage" alt="" />

    </div>
    <div >
      <h1 v-if="isPositive">+{{ maxTempToday }}</h1>
      <h1 v-else>{{ maxTempToday }}</h1>
    </div>
  </div>
</template>

<script>
import { getData } from '../services/storage-service'
export default {
  name: 'TodayWeather',
  data() {
    return {
      iconWeather: null,
      maxTempToday: null,
      isPositive: true,
    }
  },
  mounted() {
    this.maxTempToday = Math.round(
      JSON.parse(getData('weather')).main.temp - 273
    )
    if (this.maxTempToday > 0) return this.isPositive
    else return (this.isPositive = !this.isPositive)
  },
  computed: {
    getImage(){
      this.iconWeather = JSON.parse(getData('weather')).weather[0].icon;
      const urlImage = `http://openweathermap.org/img/wn/${this.iconWeather}@2x.png`
      return urlImage;
    },
  },
}
</script>

<style scoped>
.today__weather {
  display: block;
  width: 100%;
  border-radius: 15px;
  background-color: #2221213a;
  backdrop-filter: blur(15px);
  padding: 15px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 10px;
  flex: 1;
}
.block__info {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
h2 {
  margin: 0;
}

h1 {
  margin: 0;
  font-size: 102px;
}
</style>
