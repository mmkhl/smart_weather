<template>
  <div class="header">
    <div>
      <h2>{{ location }}</h2>
    </div>
    <div class="options">
      <div>
        <img
          src="../assets/settings.svg"
          alt="setings"
          height="30px"
          width="30px"
        />
        Setings
      </div>
      <div>
        <img
          src="../assets/theme.svg"
          alt="setings"
          height="30px"
          width="30px"
        />

        Theme
      </div>
      <div>
        <img
          src="../assets/location.svg"
          alt="setings"
          height="30px"
          width="30px"
        />

        City
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from '@/services/storage-service'
import { fetchWeatherInfo } from '@/services/weather-service'
export default {
  name: 'Header',
  props: {
    weatherData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      location: getData('location'),
    }
  },
  created() {
    this.getLocationUser()
  },
  methods: {
    getLocationUser() {
      const location = Intl.DateTimeFormat().resolvedOptions().timeZone
      this.location = location.split('/')[1]
      localStorage.setItem('location', this.location)
      this.getCity()
    },
    async getCity() {
      const city = getData('location')
      await fetchWeatherInfo(city)
      getData(location)
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 30px 0;
}

.options div {
  display: flex;
  align-items: center;
  vertical-align: middle;
}

h2 {
  margin: 0;
  font-size: 42px;
}
img {
  margin: 0 5px;
  color: white;
}

.options {
  max-width: 500px;
  width: 100%;
  border-radius: 15px;
  background-color: #2221213a;
  backdrop-filter: blur(15px);
  padding: 15px;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  transition: all 0.7s linear;
}
.options div:hover {
  color: #dfa019;
}
</style>
