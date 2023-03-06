<!-- <template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [
          'Monday',
          'Tuesday',
          'Wesnesday',
          'Thirsday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        datasets: [
          {
            label: 'Line Chart',
            data: [3, 0, 14, 15, 6, 10, 5],
            fill: false,
            borderColor: '#2554FF',
            backgroundColor: '#2554FF',
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
}
</script> -->
<template>
  <LineChartGenerator
    :options="chartOptions"
    :data="chartData"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)
ChartJS.defaults.color = '#fff'
ChartJS.defaults.fontSize = '16px'

export default {
  name: 'LineChart',
  components: {
    LineChartGenerator,
  },
  props: {
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartData: {
        labels: [
          'Monday',
          'Tuesday',
          'Wesnesday',
          'Thirsday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        datasets: [
          {
            label: null,
            backgroundColor: '#f87979',
            borderColor: '#fff',
            borderWidth: 3,
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Weekly weather',
            align: 'start',
            font: {
              size: '48px',
              color: '#fffff',
            },
          },
          legend: {
            display: false,
            labels: {
              color: 'rgb(255, 99, 132)',
            },
          },
        },
      },
    }
  },
}
</script>
