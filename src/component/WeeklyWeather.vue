<template>
  <div class="weekly__weather">
    <h2>Weekly weather</h2>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
ChartJS.defaults.color = "#fff"
export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Monday', 'Thusday', 'Wednesday'],
        datasets: [{ data: [7, 2, 5] }],
        updateMode: false
      },
      chartOptions: {
        responsive: true,
      },
    }
  },
}
</script>

<style scoped>
.weekly__weather {
  display: block;
  width: auto;
  height: auto;
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
