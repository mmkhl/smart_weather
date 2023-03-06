<template>
  <div class="weekly__weather">
    <h2>Weekly weather</h2>
    <LineChart :height="450"/>
  </div>
</template>

<script>
import LineChart from '../chart/LineChart'
export default {
  components: {
    LineChart,
  },
}
</script>

<style scoped>
.weekly__weather {
  display: block;
  width: auto;
  height: auto;
  max-height: 600px;
  margin: 10px;
  border-radius: 15px;
  background-color: #22212154;
  backdrop-filter: blur(15px);
  padding: 15px;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

h2 {
  margin: 0;
}

h1 {
  margin: 0;
  font-size: 102px;
}
</style>
