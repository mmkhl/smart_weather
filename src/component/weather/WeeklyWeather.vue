<template>
  <div class="weekly__weather">
    <LineChart css-classes="chart__line"/>
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
  max-height: 500px;
  margin: 10px;
  border-radius: 15px;
  background-color: #22212154;
  backdrop-filter: blur(15px);
  padding: 0 10px 15px 10px;
  color: #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
canvas{
  color: #fff;
}
h2 {
  margin: 0;
  padding: 10px 0;
}

h1 {
  margin: 0;
  font-size: 102px;
}
</style>
